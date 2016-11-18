var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sf456',
    database: 'hdfcdb'
});

module.exports = {
    getConnection: function () {
        //connection.connect();

        var ret = " _____from the DB file ";
        connection.query('SELECT * FROM feedback where ticketID = 5',
            function (err, rows, fields) {
                if (err) throw err;
                else {
                    ret = rows[0]
                }
            });
        //connection.end();
        return ret;
    }
}