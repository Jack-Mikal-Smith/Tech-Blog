const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
    console.log(req.session);
    try {
        const newComment = await Comment.create({
            ...req.body,
            userId: req.session.user_id,
            post_id: req.params.id,
        });
        console.log(newComment);
        res.status(200).json(newComment);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.params.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No Comment found with this id.'});
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;