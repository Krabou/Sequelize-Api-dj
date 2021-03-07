const {
  Musicalgenre
} = require("../models");

const musicalGenresController = {
  getAllMusicalGenres: async () => {
    const DisplayAllMusicalGenres = await Musicalgenre.findAll({
      attributes: ["name"],
      order: [
        ["name", "ASC"]
      ],
      raw: true
    })
    return {
      DisplayAllMusicalGenres
    };
  },
};

module.exports = musicalGenresController;