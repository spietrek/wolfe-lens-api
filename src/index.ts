import * as http from 'http'
import * as bodyparser from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import { CommonRoutesConfig } from './common/common.routes.config'
import logger from './common/logging.config'
import { ProductsRoutes } from './routes/product.routes'
import { UsersRoutes } from './users/users.routes'

dotenv.config()

if (process.env.PORT == null) {
  process.exit(1)
}

const app: express.Application = express()
const server: http.Server = http.createServer(app)
const PORT: number = parseInt(process.env.PORT, 10)
const routes: CommonRoutesConfig[] = []

app.use(helmet())
app.use(bodyparser.json())
app.use(express.json())
app.use(cors())

routes.push(new UsersRoutes(app))
routes.push(new ProductsRoutes(app))

const runningMessage = `Server running at address http://localhost:${PORT}`

// logger.info('Information message')
// logger.warn('Warning message')
// logger.error('Error message')

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send({ status: 'API is running on /api' })
})

server.listen(PORT, () => {
  logger.info(runningMessage)
  routes.forEach((route: CommonRoutesConfig) => {
    logger.info(`Routes configured for ${route.getName()}`)
  })
})
