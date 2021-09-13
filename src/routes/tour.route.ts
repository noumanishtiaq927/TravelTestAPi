
import express from 'express'
import { TourController } from '../controllers/tour.controller'



export class TourRouter {
    router:express.Router
    constructor(){
        this.router=express.Router()
        this.routes()
    }
    routes(){
        /**
         * Route for checking all tours
         */
      
       
            /**
         * Route for registering the tour
         */
        this.router.post('/registertour',async(req,res,next)=>
        {
            try {
                const registerTourData = req.body
          
                const saveTourData:any = await new TourController().saveTour(registerTourData)

                return res.json({
                    saveTourData
                })
            } catch (error) {
                return next(error)
            }
        })

       
    }
}

export const TourRouterApi = new TourRouter().router