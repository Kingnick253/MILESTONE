 const router = require('express').Router();
const { Task } = require('../../models');
 const {withAuth}  = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newTask= await Task.create({
        // ...req.body,
        // project_lead: req.session.project_lead,
        description:req.body.description,
        is_done:req.body.is_done,
        project_id:req.body.project_id    
    });
  
      res.status(200).json(newTask);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
