const express = require('express')
const app = express()
const sessionMiddleware = require('./middleware/sessionMiddleware')
const passport = require('./config/passportConfig')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(sessionMiddleware)

app.use(passport.initialize())
app.use(passport.session())

PORT = 3000
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
})