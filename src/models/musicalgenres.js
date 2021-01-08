'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musicalgenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Musicalgenre.belongsToMany(models.Dj, {
        through: models.DjMusicalgenre,
        foreignKey: "musicalgenre_id"
      });
    }
  };
  Musicalgenres.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Musicalgenre',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Musicalgenres;
};