const router = require('express').Router();
const { User } = require('../models');
const {withAuth,withNoAuth} = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login',withNoAuth, (req, res) => {
  
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', withNoAuth, (req, res) => {
  res.render('signup');
});

module.exports = router;


