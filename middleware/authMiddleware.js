const ensureAuth = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next()
  }
  res.status(401).json({message:"Unauthorized: Please login"})
}

module.exports = {ensureAuth}