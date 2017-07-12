const bookshelf = require('../config/db').bookshelf;

const Post = bookshelf.Model.extend({
  tableName: 'posts'
});

module.exports = {
  Post: Post
};
