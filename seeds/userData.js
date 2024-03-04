const {User} = require ('../models');

const userData = [
    {
        username: 'testUser',
        email: 'testUser@example.com',
        password: 'testPassword',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;