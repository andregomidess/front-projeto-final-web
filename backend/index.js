const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({credentials: true, origin: 'https://localhost:4200'}));

// pasta para imagens
app.use(express.static('public'))

const UserRoutes = require('./routes/UserRoutes')
app.use('/users', UserRoutes);

app.listen(3333);