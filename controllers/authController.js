const prisma = require('../database/db.config')
const bcrypt = require('bcrypt')

const loginUser = async(req,res) => {
  try{
    res.send("login")
  } catch {
    res.status(500).send("error")
  }
}

const signupUser = async(req, res) => {
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
  res.status(200).json({data: newUser, message: "user created successfully"})
}

const logoutUser = async(req, res) => {

}

module.exports = {loginUser, signupUser, logoutUser}