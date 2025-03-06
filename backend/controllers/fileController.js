const uploadOnCloudinary = require('../utils/cloudinary')
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
    if(!req.file){
      return res.status(400).json({message: "no file uploaded"})
    }
    const {originalname, path, size} = req.file
    const {folder_id} = req.file

    const cloudinaryResponse = await uploadOnCloudinary(path)
    if(!cloudinaryResponse) {
      return res.status(500).json({message:"cloudinary upload failed"})
    }

    const newFile = await prisma.file.create({
      data: {
        name: originalname,
        size: size.toString(),
        folder_id: parseInt(folder_id),
        file_url: cloudinaryResponse.secure_url
      }
    })
    res.status(201).json({message: "file uploaded successfully", file:newFile})

  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = {getFiles, addFiles}