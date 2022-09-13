const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProjectTracker extends Model {}

ProjectTracker.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    project_lead: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    start_date:{
      type: DataTypes.DATE,
      allowNull: false,

    },
    end_date:{
      type: DataTypes.DATE,
      allowNull: false,

    },
    task_list:{
      type: DataTypes.STRING(100),
      allowNull: false

    },
    is_done:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,

    },
    in_progess:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,

    },
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'projectTracker',
  }
);

module.exports = ProjectTracker;
