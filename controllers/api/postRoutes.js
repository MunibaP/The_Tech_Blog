const router = require('express').Router();
const {Comment, Post, User} = require('../../models');
const withAuth = require('../../utils/auth');

// Funtion to get all the post with certain username
router.get('/', async(req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{model: User, attributes: ['username']}],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Function to get post by id
router.get('/:id', async(req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {model: User, attributes: ['username']},
                {
                    model: Comment,
                    include: [{model: User, attributes: ['username']}],
                },
            ],
        });
        if(!postData) {
            res.status(404).json({message: 'Sorry! Could not find this post with that id'});
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Function to create new post
router.post('/', withAuth, async(req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Function to update a post
router.put('/:id', withAuth, async(req, res) => {
    try {
        const updatePost = await Post.update(req.body, {
            where: {id: req.params.id},
        });
        if (!updatePost) {
            res.status(404).json({message: 'Sorry! Could not find this post with that id'});
            return;
        }
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Function to delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        await Comment.destroy({
            where: {post_id: req.params.id},
        });
        const deletePost = await Post.destroy({
            where: {id: req.params.id},
        });
        if (!deletePost) {
            res.status(404).json({message: 'Sorry! Could not find this post with that id'});
            return;
        }
        res.status(200).json(deletePost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Exporting the router
module.exports = router;