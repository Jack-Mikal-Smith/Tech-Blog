const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Users, Posts} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Posts.findAll({
            include: [
                {
                    model: Users,
                    attributes: ['name'],
                }
            ],
        });

        const posts =  postData.map((post) => post.get({ plain: true }));

        res.render('home', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Posts.findByPk(req.params.id, {
            include: [
                Users,
                {model: Comment, include: [Users]},
            ]
        });

        const post = postData.get({ plain: true });
        console.log(post);
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await Users.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Posts }],
        });

        const user = userData.get({ plain: true });
        console.log(user);
        res.render('dashboard', {
            ...user,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup');
});

module.exports = router;