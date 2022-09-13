const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {}

Task.init(
  {
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  is_done:{
    type: DataTypes.BOOLEAN,
    defaultValue: false,

  },

  project_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'projectTracker',
      key: 'id'
    }
  },
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'task',
}
);

module.exports = Task;