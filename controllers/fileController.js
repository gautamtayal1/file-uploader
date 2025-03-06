const prisma = require('../database/db.config')

const getFiles = async(req, res) => {
  try{
    const folderId = req.params.id
    const files = await prisma.file.findMany({
      where:{folder_id : Number(folderId)}
    })
    res.json({files})
  }
  catch (err) {
    res.status(500).json({
      message: "something went wrong"
    })
  }
} 

const addFiles = async (req, res) => {
  try{
    const {name, size, folder_id} = req.body
    const newFile = await prisma.file.create({
      data: {
        name,
        size,
        folder_id
      }
    })
  } catch (err) {
    res.status(500).json({
      message: "something went wrong"
    })
  }
}

module.exports = {getFiles}