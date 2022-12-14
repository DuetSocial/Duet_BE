const { User, Comment, Artist, Genre } = require("../models")

const getAllArtists = async (req, res) => {
  try {
    const artist = await Artist.findAll()
    res.send(artist)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllArtists,
}
