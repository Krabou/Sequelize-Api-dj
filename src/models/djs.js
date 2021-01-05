'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Djs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Dj.belongsTo(models.Club, {
        foreignKey: {
          name: 'club_id',
        },
      });
      models.Dj.belongsToMany(models.Musicalgenre, {
        through: "DjMusicalgenres",
        foreignKey: {
          name: 'musicalgenre_id',
        },
      });
    }
  };
  Djs.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    url_name: DataTypes.STRING,
    name: DataTypes.STRING,
    biography: DataTypes.STRING,
    soundcloud: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    spotify: DataTypes.STRING,
    beatport: DataTypes.STRING,
    mixcloud: DataTypes.STRING,
    youtube: DataTypes.STRING,
    club_id: DataTypes.UUID,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Dj',
    createdAt: 'created_at',
    updatedAt: 'updated_at'

  });
  return Djs;
};