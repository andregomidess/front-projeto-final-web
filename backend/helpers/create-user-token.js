const jwt = require('jsonwebtoken');

const createUserToken = async (user, req, res) => {
    //criando token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, "158917bdba04b4cb7d1daa29e7f3dbdc");

    //retorna token  
    res.status(200).json({
        message: 'Você está autenticado',
        token: token,
        userId: user._id,
    })
}

module.exports = createUserToken;