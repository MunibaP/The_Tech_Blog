const sequelize = require('../config/connection');

// Importing data seed data function
const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

const seedAll = async() => {
    await sequelize.sync({force: true});
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();
