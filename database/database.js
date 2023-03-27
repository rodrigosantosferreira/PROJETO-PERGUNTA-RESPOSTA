// Arquivo que faz a conexão com o banco de dados


// ORM que auxilia na conexão com o banco de dados utilzando javascript
const Sequelize = require('sequelize')  // importando o Sequelize

// constante que cria a conexão
const connection = new Sequelize('projeto', 'root', 'senac@23', {
    host: 'localhost',
    port: '3307',
    dialect: 'mysql'
})

//exportar o modulo de conexão com o banco de dados para poder utilizar no arquivo 
// index.js
module.exports = connection;