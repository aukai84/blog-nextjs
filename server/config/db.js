var DBConfig = {
	client: 'mysql',
	connection: {
    host: 'localhost',
    user: 'new_user',
    password: 'new_password',
    database: 'newblog',
    charset: 'utf8',
	}
};

var knex = require('knex')(DBConfig);
var bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;
