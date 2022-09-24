const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      // req.session.user_id = dbUserData.id;
      req.session.logged_in = true;
      req.session.userId = dbUserData.id
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    // TODO: Add a comment describing the functionality of this expression
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // TODO: Add a comment describing the functionality of this expression
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // TODO: Add a comment describing the functionality of this method
    req.session.save(() => {
      // req.session.user_id = userData.id;
      // if(userData && validPassword){
        req.session.logged_in = true;
        req.session.userId = userData.id;
      // } else {
      //   req.session.logged_in = false;
      // }

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // TODO: Add a comment describing the functionality of this method
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// router.get('/', async (req, res) => {
//   try {
//     // TODO: Add a comment describing the functionality of this expression
//     const userData = await User.findAll();
    
//     const users = userData.map((user) => user.toJSON());
//     res.render('test', { users })

//       res.status(200).json(userData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/users/:id', async (req, res) => {
//   try {
//     // TODO: Add a comment describing the functionality of this expression
//     const userData = await User.findByPk(req.params.id);
//     if(!userData){
//       res.status(404).json({message: 'No user found with that username'});
//       return;
//     }
//     const user = userData.get({plain: true});
//     res.render('user', user);
//       res.status(200).json(userData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });



module.exports = router;
