const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

// pasta para imagens
app.use(express.static('public'))

const UserRoutes = require('./routes/UserRoutes')
const BookRoutes = require('./routes/BookRoutes')

app.use('/users', UserRoutes);
app.use('/books', BookRoutes);

app.listen(3333);
/*
router.post('/adicionar-login', (req, res) => {
    const { login } = req.body;
  
    const logins = getLogins();
  
    const loginExists = logins.some((userLogin) => userLogin === login);
  
    if (loginExists) {
      res.status(400).json({ error: 'O login já existe' });
    } else {
      logins.push(login);
  
      saveLogins(logins);
  
      res.status(200).json({ message: 'Login adicionado com sucesso' });
    }
  });*/