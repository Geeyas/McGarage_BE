var dbdetails = require("./db-details"); // importing the content from db-details file
var mysql = require("mysql2");

module.exports = {
    getconnection: () => {
        return mysql.createConnection({
            host: dbdetails.host,
            user: dbdetails.user,
            password: dbdetails.password,
            database: dbdetails.database
        });
    }
}
