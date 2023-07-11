const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({credentials: true, origin: 'https://localhost:4200'}));

// pasta para imagens
app.use(express.static('public'))

const UserRoutes = require('./routes/UserRoutes')
const BookRoutes = require('./routes/BookRoutes')

app.use('/users', UserRoutes);
app.use('/books', BookRoutes);

app.listen(3333);