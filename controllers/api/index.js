// Importing required models
const router =  require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Adding routes
router.use('/users', userRoutes);
router.use('posts', postRoutes);
router.use('/comments', commentRoutes);

// Exporting the router
module.exports = router;