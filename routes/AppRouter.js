const Router = require('express').Router()

const CommentRouter = require('./CommentRouter')

const AuthRouter = require('./AuthRouter')

Router.use('/comments', CommentRouter)

Router.use('/auth', AuthRouter)

module.exports = Router