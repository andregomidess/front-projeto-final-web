const { response } = require('express');
const User = require('../models/User');
const Book = require('../models/Book');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createUserToken = require('../helpers/create-user-token');
const getToken = require('../helpers/get-token');
const getUserByToken = require('../helpers/get-user-by-token');

module.exports = class UserController{
    static async register(req, res){
        const {name, email, password, confirmPassword, permission} = req.body;
        const image = req.file ? req.file.filename : '';

        if (!name){
            res.status(422).json({message: 'O nome é obrigatório'});
            return;
        }

        if (!email){
            res.status(422).json({message: 'O email é obrigatório'});
            return;
        }

        if (!password){
            res.status(422).json({message: 'A senha é obrigatória'});
            return;
        }

        if (password !== confirmPassword){
            res.status(422).json({message: 'A senha e a confirmação da senha precisam ser iguais'});
            return;
        }

        // checando se o usuario ja existe
        const userExists = await User.findOne({email: email});
        if(userExists){
            res.status(422).json({message: 'Utilize outro email'});
            return;
        }

        //criar uma senha encriptada
        const salt = await bcrypt.genSalt(12);
        const passwordHashed = await bcrypt.hash(password, salt);

        //criar um usuario
        const user = new User({
            name,
            email,
            password: passwordHashed,
            permission,
            image: image
        });

        try{
            const newUser = await user.save();
            await createUserToken(newUser, req, res);
        } catch(e){
            res.status(500).json({message: e});
        }

    }

    static async login(req, res){
        const {email, password} = req.body;

        if (!email){
            res.status(422).json({message: 'O email é obrigatório'});
            return
        }

        if (!password){
            res.status(422).json({message: 'A senha é obrigatória'});
            return
        }

        const user = await User.findOne({email: email});
        if(!user){
            res.status(422).json({message: 'Usuario inexistente'});
            return
        }

        // checa se a senha bate com a senha do banco
        const checkPassword = await bcrypt.compare(password, user.password);
        if(!checkPassword){
            res.status(422).json({message: 'senha invalida'});
            return
        }
        await createUserToken(user, req, res);

    }

    static async checkUser(req, res){
        let currentUser;
        if (req.headers.authorization){
            const token = getToken(req);
            const decoded = jwt.verify(token, '158917bdba04b4cb7d1daa29e7f3dbdc');
            currentUser = await User.findById(decoded.id);
            currentUser.password = undefined;
        }else{
            return null;
        }

        res.status(200).send(currentUser);
    }

    static async getUserById(req, res){
        const id = req.params.id;
        const user = await User.findById(id).select('-password');
        if (!user) {
            res.status(422).json({
                message: 'Usuario não encontrado',
            });
            return;
        }
        res.status(200).json({user});
    }

    static async editUser(req, res){
        const token = getToken(req);
        const user = await getUserByToken(token); 
        const {name, email, password, confirmPassword} = req.body;

        if (req.file){
            user.image = req.file.filename;
        } else{
            user.image = '../../src/assets/images/login/user.png';
        }

        if (!name){
            res.status(422).json({message: 'O nome é obrigatório'});
            return
        }
        user.name = name;

        if (!email){
            res.status(422).json({message: 'O email é obrigatório'});
            return
        }

        const userExists = await User.findOne({email: email});
        if (user.email !== email && userExists) {
            res.status(422).json({
                message: 'Utilize outro e-mail',
            });
            return;
        }
        user.email = email;

        if (password != confirmPassword){
            res.status(422).json({message: 'A senha e a confirmação da senha precisam ser iguais'});
            return
        } else if (password === confirmPassword && password != null){
            //criar nova senha
            const salt = await bcrypt.genSalt(12);
            const passwordHashed = await bcrypt.hash(password, salt);
            user.password = passwordHashed;
        }

        try{
            await User.findByIdAndUpdate(
                {_id: user._id},
                {$set: user},
                {new: true}
            )
            res.status(200).json({message: 'usuario atualizado com sucesso'});
        }catch(e){
            res.status(500).json({message: e});
            return;
        }

    }

    static async favoriteBook(req, res){
        //pegando o usuario atual
        const token = getToken(req);
        const user = await getUserByToken(token); 
        const { bookId } = req.body;

        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return; 
          }
      
          // Verifica se o livro já está nos favoritos
          if (user.booksFavorite.includes(bookId)) {
            return res.status(400).json({ message: 'O livro já está nos favoritos' });
          }
      
          // Adiciona o livro ao array de favoritos
          user.booksFavorite.push(bookId);
          await user.save();
      
          res.status(200).json({ message: 'Livro adicionado aos favoritos com sucesso' });

    }

    static async getFavoriteBooks(req, res){
        try{
            //pegando o usuario atual
            const token = getToken(req);
            const user = await getUserByToken(token); 
            if (!user) {
                res.status(404).json({ message: 'Usuário não encontrado' });
                return;
            }
        
            const favoriteBooks = await Book.find({ _id: { $in: user.booksFavorite } });

            res.status(200).send(favoriteBooks);
        }catch(e) {
            res.status(500).send(e);
        }
    }
}
