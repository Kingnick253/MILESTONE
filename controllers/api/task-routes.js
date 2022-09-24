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


// ************  v removed withAuth need to put back ***********
//this route is giving the data for chart.js
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


  // ***********Test route for all the of the data in task *********
  router.get('/',withAuth, async (req, res) => {
    try {
      const dbTaskData = await Task.findAll();

      const tasks = dbTaskData.map((task) => task.toJSON());
      res.render('all', { tasks });


      
  
      // const ProjectData = dbProjectData.map((ProjectTracker) =>
      //   ProjectTracker.get({ plain: true })
      //);
  
      res.json( dbTaskData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/:id',withAuth, async (req, res) => {
    try {
      const dbTaskData = await Task.findByPk(req.params.id,{
   });

   const task = dbTaskData.get({plain:true});
   res.json(task);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const TaskData = await Task.destroy({
        where: {
          id: req.params.id,
          // project_lead: req.session.project_lead,
        },
      });
  
      if (!TaskData) {
        res.status(404).json({ message: 'No task found with this id!' });
        return;
      }
  
      res.status(200).json(TaskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  module.exports = router;
