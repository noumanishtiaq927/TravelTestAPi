import express, {Application, Request, Response, NextFunction} from 'express'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import mongoose from 'mongoose'
import cors from 'cors'

import {MongoDb} from './configs/db.connection'
import {Server} from 'http'
import {MainRouterApi} from './routes/index.routes'

let server: Server | null = null
const PORT = process.env.PORT || 8000

function initApplication(): express.Application {
	//mongo db connection
	new MongoDb().connect()

	const app = express()

	//parsing data
	app.use(express.json())
	app.use(express.urlencoded({extended: true}))

	//for logging
	app.use(morgan('tiny'))

	//for static files
	app.use(express.static('public'))

	// swagger
	app.use(
		'/swagger',
		swaggerUi.serve,
		swaggerUi.setup(undefined, {
			swaggerOptions: {
				url: '/swagger.json',
			},
		})
	)
	//adding cors
	app.use(cors())

	app.use(express.json())
	app.use(express.urlencoded({extended: true}))

	// routes
	app.use(MainRouterApi)

	app.use((err: any, req: Request, res: Response, next: NextFunction) => {
		res.locals.message = err.message
		console.log(res.locals)
		const status = err.statusCode || 500
		res.locals.status = status
		res.locals.error = req.app.get('env') === 'development' ? err : {}
		res.status(status)
		return res.json({
			error: {
				message: err.message,
			},
		})
	})

	return app
}

function start() {
	const app = initApplication()

	server = app.listen(process.env.PORT || PORT, () => {
		console.log(`Server started on PORT:` + PORT)
	})
}
// Start the application

start()
