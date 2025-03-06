const { Router } = require("express");
const authRouter = require("./authRouter");
const folderRouter = require("./folderRouter");
const fileRouter = require("./fileRouter");

const indexRouter = Router()

indexRouter.use('/auth', authRouter)
indexRouter.use('/folder', folderRouter)
indexRouter.use('/file', fileRouter)

module.exports = indexRouter