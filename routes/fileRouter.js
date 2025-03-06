const { Router } = require("express");
const { ensureAuth } = require("../middleware/authMiddleware");
const { getFiles, addFiles } = require("../controllers/fileController");
const upload = require('../middleware/multer')

const fileRouter = Router()

fileRouter.get('/get/:id', ensureAuth, getFiles )
fileRouter.post('/add', ensureAuth, upload.single("file"), addFiles)

module.exports = fileRouter