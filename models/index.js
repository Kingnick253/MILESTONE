const User = require('./User');
//const FoodItem = require('./FoodItem');
const ProjectTracker = require('./projectTracker')

// Create associations
User.hasMany(ProjectTracker, {
  onDelete: 'CASCADE',
  foreignKey: 'id',
});

ProjectTracker.belongsTo(User, {
  foreignKey: 'id'
});

module.exports = { User, ProjectTracker };
