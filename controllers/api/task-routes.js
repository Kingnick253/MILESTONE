 const router = require('express').Router();
const { Task } = require('../../models');
 const {withAuth}  = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newTask= await Task.create({
        ...req.body,
        project_id: req.session.project_id,
          
    });
  
      res.status(200).json(newTask);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/',withAuth, async (req, res) => {
    try {
      const dbTaskData = await Task.findAll({});
  
      // const ProjectData = dbProjectData.map((ProjectTracker) =>
      //   ProjectTracker.get({ plain: true })
      //);
  
      res.json( dbTaskData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  module.exports = router;
