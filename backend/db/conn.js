const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb+srv://andregomides:unifei@webprojetofinal.6y2sekb.mongodb.net/');
    console.log('Conectou ao mongoose!');

}

main().catch((err) => console.log(err));

module.exports = mongoose