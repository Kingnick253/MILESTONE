const router = require('express').Router();
const { User, Task, ProjectTracker} = require('../models');
const {withAuth,withNoAuth} = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('login', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login',withNoAuth, (req, res) => {
  res.render('login');
});
//While logged in it will take user to project creation page.
router.get('/home',withAuth, (req, res) => {
  res.render('home');
});

router.get('/signup', withNoAuth, (req, res) => {
  res.render('home');
});
// Get one project
router.get('/project/:id', withAuth, async (req, res) => {
  try {
    const dbProjectData = await ProjectTracker.findByPk(req.params.id, {
      include: [
        {
          model: Task,
          attributes: [
            'id',
            'title',
            'description',
        
          ],
        },
      ],
    });

    const projectdata = dbProjectData.get({ plain: true });

    res.render('project', {
      projectdata,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});






module.exports = router;


