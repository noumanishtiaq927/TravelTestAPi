

import express from 'express'
import { Body, Delete, Get, Patch, Post, Put, Route, Tags , SuccessResponse,Security,Response } from "tsoa"
import CustomeError from "../utils/error"
import { IDeleteBussRequest, ISaveBussRequest, ISingleBussRequest, IUpdateBussRequest } from "../types/requests/bus.request"
import { IDeleteBussResponse, ISaveBussResponse, IUpdateBussResponse,ISingleBussResponse, IBusErrorResponse } from '../types/responses/bus.response'
import { BussRepository } from '../repositories/bus.repository'

@Route('buss')
@Tags('Buss')
export class BussController {
    
    constructor(){}
  
    /**
     * The user register the bus through this route
     * @summary For register provide BussName and BusSeats
     * @param registerBussRequest 
     * @returns 
     */

    @Post('/registerbuss')
    async saveBuss(@Body() registerBussRequest:ISaveBussRequest):Promise<ISaveBussResponse>
    {
        const newbuss:any = await new BussRepository().saveBuss(<any> registerBussRequest)
        console.log(newbuss)
        return <ISaveBussResponse>newbuss
    }

   

    /**
     * The user will see all the buss 
     * @summary Get all the Buss 
     * @param registerBussRequest 
     * @returns 
     */
     @Response<IBusErrorResponse>(404,'Not Supported Operation')  // error response
    @Get('/allbuss')
    async getallbuss():Promise<ISaveBussResponse[]>
    {
        const getallbuss:any = await new BussRepository().getAllBuss()
        if(getallbuss.length === 0) throw new CustomeError(404 ,'Not Found')
        console.log(getallbuss)
        return   <any> getallbuss
    }

     /**
     * The user update the bus through this route
     * @summary For update provide the bus id, busname and bus seats. New if you want to update, if not provide the old one.
     * @param registerBussRequest 
     * @returns 
     */
      @Response<IBusErrorResponse>(404,'Not Supported Operation')
    @Put('/updatebuss')
    async updateBuss(@Body() updateBussRequest:IUpdateBussRequest):Promise<IUpdateBussResponse>
    {
     
        const updatedBuss:any = await new BussRepository().updateBuss(<any> updateBussRequest)
        if(updatedBuss === null) throw new CustomeError(404, 'Not Supported Operation')

        return <IUpdateBussResponse> updatedBuss   

    }
    /**
     * This route will be used  to delete the bus
     * @summary For delete the specific buss please provide the id for that bus
     * @param registerBussRequest 
     * @returns 
     */

    @Delete('/deletebuss')
    @SuccessResponse("200","Product Deleted")
    async deleteBuss(@Body() deleteBuss:IDeleteBussRequest):Promise<IDeleteBussResponse>
    {
        const deletedBuss:any = await new  BussRepository().deleteBuss(<any> deleteBuss)
        return deletedBuss
    }

    
}