const { Router } = require("express");
const { loginUser, signupUser, logoutUser } = require("../controllers/authController");
const passport = require("passport");

const authRouter = Router()

authRouter.post('/login', loginUser)
authRouter.post('/signup', signupUser)
authRouter.post('/logout', logoutUser)

module.exports = authRouter