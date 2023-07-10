const jwt = require('jsonwebtoken');
const User = require('../models/User');

const getUserByToken = async (token) => {
    if (!token){
        return res.status(401).json({message: 'Acesso Negado!'});
    }
    const decoded = jwt.verify(token, '158917bdba04b4cb7d1daa29e7f3dbdc');
    const userId = decoded.id;
    const user = await User.findOne({_id: userId});
    return user;
}
module.exports = getUserByToken;