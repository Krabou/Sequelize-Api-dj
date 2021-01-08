'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DjMusicalgenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DjMusicalgenres.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    dj_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'Dj',
        key: 'id'
      }
    },
    musicalgenre_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'Musicalgenre',
        key: 'id'
      }
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'DjMusicalgenre',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return DjMusicalgenres;
};