const { Router } = require("express");
const { addFolder, deleteFolder, updateFolderName, getFolder } = require("../controllers/folderController");
const { ensureAuth } = require("../middleware/authMiddleware");

const folderRouter = Router()

folderRouter.post('/add', ensureAuth, addFolder)
folderRouter.delete('/delete', ensureAuth, deleteFolder)
folderRouter.put('/update/:id', ensureAuth, updateFolderName)
folderRouter.get('/get', ensureAuth, getFolder)

module.exports = folderRouter