import express from 'express'
import { BusRouterApi } from './bus.route'
import { TourRouterApi } from './tour.route'


export class MainRouter {
	router: express.Router
	constructor() {
		this.router = express.Router()
		this.routes()
	}
	routes() {

		
		//redirect to swagger route
		this.router.all('/', (req, res) => {
			res.redirect('/swagger')
		})


		// routes for buss
		this.router.use('/buss', BusRouterApi)
		
		// routes for tour
		this.router.use('/tour', TourRouterApi)
	}
}
export const MainRouterApi = new MainRouter().router
