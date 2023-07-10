const jwt = require("jsonwebtoken");

//middleware para validar token
const checkToken = (req, res, next) =>{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) return res.status(401).json({ message: "Acesso negado!" });
    try{
        const verified = jwt.verify(token, '158917bdba04b4cb7d1daa29e7f3dbdc');
        req.user = verified;
        next();
    } catch(e){
        return res.status(400).json({message: 'Token inválido'});
    }
}

module.exports = checkToken;