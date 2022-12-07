const Router = require("express").Router()
const controller = require("../controllers/UserController")

Router.get("/view", controller.getAllUsers)

module.exports = Router
