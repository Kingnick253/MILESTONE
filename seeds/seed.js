const sequelize = require('../config/connection');
const { User, Project, Task } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const taskData = require('./taskData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await projectData.bulkCreate(projectData, {
    individualHooks: true,
    returning: true,
  });

  await taskData.bulkCreate(taskData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
