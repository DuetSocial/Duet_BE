const { User, Comment, Artist, Genre } = require('../models')

const getAllComments = async (req, res) => {
  try{
    const comment = await Comment.findAll()
    res.send(comment)
  } catch (error) {
    throw error
  }
}
const addComment = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let commentBody = {...req.body, userId}
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}
const updateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    let updatedComment = await Comment.update(req.body, {
      where: {id: commentId},
      returning: true
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}
const deleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({where: {id: commentId} })
    res.send({message: `Deleted comment with an id of ${commentId}`})
  } catch (error) {
    throw error
  }
}
module.exports = {
  getAllComments,
  addComment,
  updateComment,
  deleteComment
}
