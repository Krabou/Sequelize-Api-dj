const {
  Club
} = require("../models");

const clubsController = {
  getAllClubs: async () => {
    // Your code here
    const DisplayAllClubs = await Club.findAll()
    return {
      DisplayAllClubs
    };
  },
  getClub: async (name) => {
    // Your code here (name)
    const DisplayClubByName = await Club.findOne({
      where: {
        name: name,
      },
    })
    return {
      DisplayClubByName
    };
  },
  addClub: async (data) => {
    // Your code here
    const NewClub = await Club.create(data)
    console.log(NewClub)
    return {
      NewClub
    };
  },
};

module.exports = clubsController;