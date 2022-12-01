const Router = require('express').Router()

const CommentRouter = require('./CommentRouter')

Router.use('/comments', CommentRouter)

module.exports = Router