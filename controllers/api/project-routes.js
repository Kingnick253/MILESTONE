const router = require('express').Router();
const { ProjectTracker } = require('../../models');
const { withAuth } = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newProject = await ProjectTracker.create({
      ...req.body,
        project_lead:req.session.project_lead,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/',withAuth, async (req, res) => {
    try {
      const dbProjectData = await ProjectTracker.findAll({});
  
      // const ProjectData = dbProjectData.map((ProjectTracker) =>
      //   ProjectTracker.get({ plain: true })
      //);
  
      res.json( dbProjectData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/:id',withAuth, async (req, res) => {
    try {
      const dbProjectData = await ProjectTracker.findByPk(req.params.id,{
   });

   const project = dbProjectData.get({plain:true});
   res.json(project);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
   
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const projectData = await ProjectTracker.destroy({
        where: {
          id: req.params.id,
          // project_lead: req.session.project_lead,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });




  module.exports = router;
  