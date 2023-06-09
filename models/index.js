const Users = require('./Users');
const Posts = require('./Posts');
const Comment = require('./Comment');

Posts.belongsTo(Users, {
    foriegnKey: 'user_id'
});

Posts.hasMany(Comment, {
    foriegnKey: 'post_id'
});

Comment.belongsTo(Users, {
    foriegnKey: 'user_id'
});

module.exports = { Users, Comment, Posts };