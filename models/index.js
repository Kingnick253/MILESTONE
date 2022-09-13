const User = require('./User');

const Task = require('./task')
const ProjectTracker = require('./projectTracker')

// Create associations
User.hasMany(ProjectTracker, {
  onDelete: 'CASCADE',
  foreignKey: 'project_lead',
});

ProjectTracker.belongsTo(User, {
  foreignKey: 'project_lead'
});
ProjectTracker.hasMany(Task, {
  onDelete: 'CASCADE',
  foreignKey: 'project_id',
});
Task.belongsTo(ProjectTracker, {
  foreignKey: 'project_id',
});

module.exports = { User, ProjectTracker, Task };
