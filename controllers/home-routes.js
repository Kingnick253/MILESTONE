const router = require('express').Router();
const { Project, User } = require('../models');
const {withAuth,withNoAuth} = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('home', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login',withNoAuth, (req, res) => {
  res.render('home');
});

router.get('/home',withNoAuth, (req, res) => {
  res.render('home');
});

router.get('/signup', withNoAuth, (req, res) => {
  res.render('home');
});

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});






module.exports = router;


