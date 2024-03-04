const {Post} = require('../models');

const postData = [
    {
        title: "My First Tech Blog",
        content: "A tech blog is a website or online platform where writers share articles, tutorials, reviews, and insights about technology-related topics.",
        user_id: 1,
    },
    {
        title: "Second Tech Blog",
        content: "Here is the content for the second blog post.",
        user_id: 2,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;