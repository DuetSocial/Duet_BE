const { User, Comment, Artist, Genre } = require("../models")

const getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll()
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllUsers,
}
