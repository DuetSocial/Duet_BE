const Router = require("express").Router()
const controller = require("../controllers/ArtistController")

Router.get("/view", controller.getAllArtists)

module.exports = Router
