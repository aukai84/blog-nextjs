var DBConfig = {
	client: 'mysql',
	connection: {
    host: 'localhost',
    user: 'bloguser',
    password: 'supra848',
    database: 'newblog',
    charset: 'utf8',
	}
};

var knex = require('knex')(DBConfig);
var bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;
