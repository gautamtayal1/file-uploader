const { Router } = require("express");
const authRouter = require("./authRouter");
const folderRouter = require("./folderRouter");

const indexRouter = Router()

indexRouter.use('/auth', authRouter)
indexRouter.use('/folder', folderRouter)

module.exports = indexRouter