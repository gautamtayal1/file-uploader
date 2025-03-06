const { PrismaClient } = require('@prisma/client')
const session = require('express-session')
const { PrismaSessionStore } = require('@quixo3/prisma-session-store')

const prisma = new PrismaClient()

const sessionMiddleware = session({
  secret: "not_a_secret",
  saveUninitialized: false,
  resave: false,
  store: new PrismaSessionStore(prisma, {
    checkPeriod: 2 * 60 * 1000,
    dbRecordIdIsSessionId: true
  }),
  cookie: {maxAge: 24 * 60 * 60 * 1000},
})

module.exports = sessionMiddleware