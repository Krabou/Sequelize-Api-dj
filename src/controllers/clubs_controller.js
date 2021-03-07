const {
  Club
} = require("../models");

const clubsController = {
  getAllClubs: async () => {
    const DisplayAllClubs = await Club.findAll({
      attributes: ["name"],
      order: [
        ["name", "ASC"]
      ],
      raw: true
    })
    return {
      DisplayAllClubs
    };
  },
  getClub: async (name) => {
    const DisplayClubByName = await Club.findOne({
      where: {
        name: name,
      },
      attributes: ["id", "name"]
    })
    return {
      DisplayClubByName
    };
  },
  addClub: async (data) => {
    const NewClub = await Club.create(data)
    console.log(NewClub)
    return {
      NewClub
    };
  },
};

module.exports = clubsController;