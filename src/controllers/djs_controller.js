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
        Musicalgenre,
        
      ]
    })
    return {
      DisplayAllDjs
    };
  },

  getDj: async (name) => {
    // Your code here
    const DisplayClubByName = await Dj.findOne({
      where: {
        name: name,
      },
      include: [{
        model: Club
      }]
    })
    return {
      DisplayClubByName
    };
  },

  addDj: async (data) => {
    // Your code here
    const NewDj = await Dj.create(data)
    console.log(NewDj)
    return {
      NewDj
    };
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