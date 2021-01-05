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
      models.DjMusicalgenre.belongsToMany(models.Dj, {
        through: DjMusicalgenres,
        foreignKey: {
          name: 'dj_id',
        },
      });
      models.DjMusicalgenre.belongsToMany(models.Musicalgenre, {
        through: DjMusicalgenres,
        foreignKey: {
          name: 'musicalgenre_id',
        },
      });
    }
  };
  DjMusicalgenres.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    dj_id: DataTypes.UUID,
    musicalgenre_id: DataTypes.UUID,
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