const prisma = require('../database/db.config')

const addFolder = async(req, res) => {
  try{
    const {name} = req.body
    const id = req.user.id
    const newFolder = await prisma.folder.create({
      data: {user_id : id, name}
    })
    res.status(200).json({data: newFolder})
  } catch (err) {
    res.status(500).json({
      message: "something went wrong"
    })
  }
}

const deleteFolder = async(req, res) => {
  try{
    const {id} = req.body
    const deletedFolder = await prisma.folder.delete({
      where : {
        id : Number(id)
      }
    })
    res.json({
      deletedFolder: (deletedFolder)
    })
  }
  catch (err) {
    res.status(500).json({
      message: "something went wrong"
    })
  }
}

const updateFolderName = async(req, res) => {
  try{
    const id = req.params.id
    const {name} = req.body
    
    const changedName = await prisma.folder.update({
      where:{
        id: Number(id)
      },
      data: {
        name
      }
    })
    res.status(200).json({message:"name changed"})
  }
  catch (err) {
    req.status(500).json({
      message: "something went wrong"
    })
  }
}

const getFolder = async(req, res) => {
  try{
    folder = await prisma.folder.findMany({})
    res.json({folder})
  }
  catch (err) {
    res.status(500).json({
      message: "something went wrong"
    })
  }
}

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

module.exports = {addFolder, deleteFolder, updateFolderName, getFolder, getFiles}

