const prisma = require('../database/db.config')
const bcrypt = require('bcrypt')
const passport = require('passport')

const signupUser = async(req, res) => {
  try{
    const {name, email, password} = req.body

    const hashPassword = await bcrypt.hash(password, 10)
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      }
    })
    if(findUser) {
      return res.status(400).json({message: "email already exists, please login"})
    }
    const newUser = await prisma.user.create({
      data: {name, email, password:hashPassword}
    })
    req.login(newUser, (err) => {
      if (err) {
        return next(err)
      }
      res.status(200).json({data: newUser, message: "user logged successfully"})
    })

    
  } catch (error) {
    res.status(500).error("server error")
  }
  
}

const loginUser = (req, res, next) => {
  passport.authenticate('local', (err,user, info) => {
  if(err) return next(err)
  if(!user) return res.status(401).json({message: info.message})

  req.logIn(user, (err) => {
    if (err) return next(err)
      return res.json({message:"login successful", user})
  })
})(req, res, next)
}

const logoutUser = async(req, res) => {
  req.logout((err) => {
    if(err) {
      return res.status(500).json({message: "Logout failed"})
    }
    res.clearCookie("connect.sid")
    res.json({message: "Logout success"})
  })
}

module.exports = {loginUser, signupUser, logoutUser}