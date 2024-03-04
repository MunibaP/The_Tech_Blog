const {Comment} = require('../models');

const commentData = [
    {
        commentText: 'My First Tech Blog',
        user_id: 1,
        user_id: 1,
    },
    {
        commentText: 'My Second Tech Blog',
        user_id: 2,
        user_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;