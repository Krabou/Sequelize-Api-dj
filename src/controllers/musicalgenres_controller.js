const {
  Musicalgenre
} = require("../models");

const musicalGenresController = {
  getAllMusicalGenres: async () => {
    // Your code here
    const DisplayAllMusicalGenres = await Musicalgenre.findAll()
    return {
      DisplayAllMusicalGenres
    };
  },
};

module.exports = musicalGenresController;