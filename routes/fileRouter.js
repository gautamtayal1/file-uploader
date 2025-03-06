const { Router } = require("express");
const { ensureAuth } = require("../middleware/authMiddleware");
const { getFiles } = require("../controllers/fileController");

const fileRouter = Router()

fileRouter.post('/get/:id', ensureAuth, getFiles )

module.exports = fileRouter