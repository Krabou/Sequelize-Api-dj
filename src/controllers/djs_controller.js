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
    const DisplayAllDjs = await Dj.findAll({
      attributes: {
        exclude: ["id", "club_id", "created_at", "updated_at"]
      },
      include: [{
          model: Club,
          attributes: ["name"]
        },
        {
          model: Musicalgenre,
          attributes: ["name"],
          through: {
            attributes: []
          }
        }
      ],
      order: [
        ["name", "ASC"]
      ],
    })
    return {
      DisplayAllDjs
    };
  },

  getDj: async (name) => {
    const DisplayDjByName = await Dj.findOne({
      where: {
        name: name,
      },
      attributes: {
        exclude: ["id", "club_id", "created_at", "updated_at"]
      },
      include: [{
          model: Club,
          attributes: ["name"]
        },
        {
          model: Musicalgenre,
          attributes: ["name"],
          through: {
            attributes: []
          }
        }
      ],
    })
    return {
      DisplayDjByName
    };
  },

  addDj: async (data) => {
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
    const updatedDj = await Dj.update(data, {
      where: {
        name: name,
      }
    });
    const findThisDj = await Dj.findOne({
      where: {
        name: data.name
      }
    });
    const DisplayAllMusicalGenre = await Musicalgenre.findAll();

    //WE COMPARE THEM IF ITS A MATCH WE ADD A NEW DJMUSICAL THEN WITH THE ID OF DJ AND MUSICALGENRE WE CREATE A NEW DJMUSICALGENRE ELSE WE DELETE THEM

    data.musical_genres.forEach(musical => {
      for (let i = 0; i < DisplayAllMusicalGenre.length; i++) {
        if (DisplayAllMusicalGenre[i].dataValues.name.toLowerCase() == musical.toLowerCase()) {
          DjMusicalgenre.create({
            dj_id: findThisDj.id,
            musicalgenre_id: DisplayAllMusicalGenre[i].dataValues.id
          })
        } else {
          DjMusicalgenre.destroy({
            where: {
              dj_id: findThisDj.id,
              musicalgenre_id: DisplayAllMusicalGenre[i].dataValues.id
            }
          })
        }
      }
    })
    return {
      updatedDj
    };
  },
  deleteDj: async (name) => {
    //FIND THE DJ BY NAME
    const thisDj = await Dj.findOne({
      where: {
        name: name
      }
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