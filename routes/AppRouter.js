const Router = require("express").Router()

const CommentRouter = require("./CommentRouter")
const AuthRouter = require("./AuthRouter")
const ArtistRouter = require("./ArtistRouter")
const UserRouter = require("./UserRouter")

Router.use("/comments", CommentRouter)
Router.use("/artists", ArtistRouter)
Router.use("/users", UserRouter)
Router.use("/auth", AuthRouter)

module.exports = Router
