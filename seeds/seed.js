const sequelize = require('../config/connection');

const { User, ProjectTracker, Task } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const taskData = require('./taskData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  await ProjectTracker.bulkCreate(projectData, {
    individualHooks: true,
    returning: true,
  });

  await Task.bulkCreate(taskData, {


    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
