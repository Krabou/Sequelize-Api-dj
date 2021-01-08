const {
  pick
} = require("lodash");

const {
  Dj,
  Musicalgenre,
  DjMusicalgenre,
  Club
} = require("../models");
const {
  NotFoundError
} = require("../helpers/errors");

const djsController = {
  getAllDjs: async () => {
    // Your code here
    const DisplayAllDjs = await Dj.findAll({
      include: [{
          model: Club
        },
        {
          model: Musicalgenre,
        }
      ]
    })
    return {
      DisplayAllDjs
    };
  },

  getDj: async (name) => {
    // Your code here
    const DisplayDjByName = await Dj.findOne({
      where: {
        name: name,
      },
      include: [{
          model: Club,
        },
        {
          model: Musicalgenre,
        }
      ]
    })
    return {
      DisplayDjByName
    };
  },

  addDj: async (data) => {
    // Your code here

    //CREATE A NEW DJ
    const NewDj = await Dj.create(data);

    //FIND THE DJ THAT WE JUST CREATE
    const findThisDj = await Dj.findOne({
      where: {
        name: data.name
      }
    });

    //FIND ALL TYPE OFF MUSIC
    const DisplayAllMusicalGenre = await Musicalgenre.findAll();


    //WE COMPARE THEM IF ITS A MATCH WE ADD A NEW DJMUSICAL THEN WITH THE ID OF DJ AND MUSICALGENRE WE CREATE A NEW DJMUSICALGENRE
    data.musical_genres.forEach(musical => {
      for (let i = 0; i < DisplayAllMusicalGenre.length; i++) {
        if (DisplayAllMusicalGenre[i].dataValues.name.toLowerCase() == musical.toLowerCase()) {
          DjMusicalgenre.create({
            dj_id: findThisDj.id,
            musicalgenre_id: DisplayAllMusicalGenre[i].dataValues.id
          })
        }
      }
    })
    return NewDj
  },
  updateDj: async (name, data) => {
    // Your code here
    const updatedDj = await Dj.update(data, {
      where: {
        name: name,
      }
    })
    return {
      updatedDj
    };
  },
  deleteDj: async (name) => {
    // Your code here
    //FIND THE DJ BY NAME
    const thisDj = await Dj.findOne({
      where: {
        name: name
      }
    });
    //DELETE HIS DJMUSICALGENRE
    const deletedDjMusicalgenre = await DjMusicalgenre.destroy({
      where: {
        dj_id: thisDj.id,
      },
    });
    //DELETE HIM
    const deletedDj = await Dj.destroy({
      where: {
        name: name,
      },
    })
    return {
      deletedDj
    };
  },
};

module.exports = djsController;