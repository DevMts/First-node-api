import fastify from 'fastify'
// import { knex } from './database'
// import crypto from 'node:crypto'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

// GET, POST, PUT, DELETE, PATCH
app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
