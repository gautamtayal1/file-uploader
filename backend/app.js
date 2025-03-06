const express = require('express')
const app = express()
const sessionMiddleware = require('./middleware/sessionMiddleware')
const passport = require('./config/passportConfig')
const indexRouter = require('./routes/indexRouter')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(sessionMiddleware)

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use(indexRouter)

PORT = 3000
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
})