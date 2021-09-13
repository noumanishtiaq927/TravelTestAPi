
import express from 'express'
import { BussController } from '../controllers/bus.controller'


export class BussRouter {
    router:express.Router
    constructor(){
        this.router=express.Router()
        this.routes()
    }
    routes(){
        /**
         * Route for checking all busses
         */
        this.router.get('/allbuss', async(req,res,next)=>
        {
            try {
                const busData:any = await new BussController().getallbuss()

                return res.json({busData})
            } catch (error) {
                return next(error)
            }
       
            
        })
         
            /**
         * Route for registering the buss
         */
        this.router.post('/registerbuss',async(req,res,next)=>
        {
            try {
                const registerBussData = req.body
          
                const saveBussData:any = await new BussController().saveBuss(registerBussData)

                return res.json({
                    saveBussData
                })
            } catch (error) {
                return next(error)
            }
        })

          /**
         * Route for updating the buss details
         */

        this.router.put('/updatebuss',async(req,res,next)=>
        {
            try {
                const updateBussRequestBody = req.body
             
                const updateBuss:any = await new BussController().updateBuss(updateBussRequestBody)

                res.json({
                    
                    updateBuss
                })
                
            } catch (error) {
                return next(error)
            }
        })
          /**
         * Route for delete the bus
         */
        this.router.delete('/deletebuss', async(req:any,res,next)=>
        {
            try {
                const bussId = req.body._id
                console.log(bussId)
              
                 await new BussController().deleteBuss(<any> bussId)
         
            
                res.json({

                    message:"bus details deleted"
                    })

            } catch (error) {
                next(error)
            }
        })
     
    }
}

export const BusRouterApi = new BussRouter().router