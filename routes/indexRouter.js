const { Router } = require("express");
const authRouter = require("./authRouter");

const indexRouter = Router()

indexRouter.use('/auth', authRouter)

module.exports = indexRouter