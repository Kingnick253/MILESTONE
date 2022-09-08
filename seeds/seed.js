const sequelize = require('../config/connection');
const { User, ProjectTracker } = require('../models');

const userData = require('./userData.json');
const ProjectTrackerData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await ProjectTracker.bulkCreate(ProjectTrackerData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
