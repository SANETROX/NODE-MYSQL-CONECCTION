// Cramos una funcion que devuelve la conexion a mysql
const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'camilo1994',
        database: 'news_portal2'

    });
}