

import express from 'express'
import { Body, Delete, Get, Patch, Post, Put, Route, Tags , SuccessResponse,Security,Response } from "tsoa"
import { BussRepository } from '../repositories/bus.repository'
import { TourRepository } from '../repositories/tour.repository'
import { IDeleteTourRequest, ISaveTourRequest, IUpdateTourRequest } from '../types/requests/tour.request'
import { IDeleteTourResponse, ISaveTourResponse, ITourErrorResponse, IUpdateTourResponse } from '../types/responses/tour.response'
import CustomeError from "../utils/error"


@Route('tour')
@Tags('Tour')
export class TourController {
    
    constructor(){}
  
    /**
     * This route is used to register the tour.
     * @summary For register the tour provide the needed details
     * @param registerTourRequest 
     * @returns 
     */
    
    @Post('/registertour')
    async saveTour(@Body() registerTourRequest:ISaveTourRequest):Promise<any>
    
    {
        // const newtour:any = await new TourRepository().saveTour(<any> registerTourRequest)
        // return <ISaveTourResponse>newtour

        var date:any
        date = new Date(registerTourRequest.tourBookingDate)
        
        if(date.toString() != 'invalid Date') {
            var availableBusses = await new BussRepository().getAvailableBussesByDate(date)
            var allotedBuses = this.allotBusses(availableBusses, registerTourRequest.tourParticipants)
            console.log(allotedBuses)

            const registeredTour:any = await new TourRepository().saveTour(<any> registerTourRequest)
            if(!registeredTour) throw new CustomeError(400, 'cannot register tour')
            return  registeredTour
        }
        else  
         throw new CustomeError(404, 'cannot register tour invalid tour date')
    }

    private allotBusses(availableBusses:Array<any>, tourParticipants:number) {
        if (availableBusses.length == 0) 
         throw new CustomeError(404, 'No available buses')

         let bussSubset = this.generateBussesSubsets(availableBusses, availableBusses.length)
         let mappedSubset = this.mapTotalSubsetCapacity(bussSubset).sort(function(a:any, b:any){
             return b.totalCapacity - a.totalCapacity
         })

         while (mappedSubset.length > 0) {
             let currSubset = mappedSubset.pop();
             if(currSubset) {
                 if (currSubset.totalCapacity >= tourParticipants)
                 return currSubset
             }
         }
         throw new CustomeError(400 , 'we have not that much capaacity busses available')
    }
    
    generateBussesSubsets(availableBusses:Array<any>, totalBusses:number)
    {
        var allSubsets = []

        for (var i=0; i<(Math.pow(2, totalBusses)); i++){
            var subset = []

            for(var j=0; j<totalBusses; j++){
                if(i & (1 << j)){
                    subset.push(availableBusses[j])
                }
            }
            if(subset.length > 0)
             allSubsets.push(subset)
        }
        return allSubsets
    }
    mapTotalSubsetCapacity(subsets:any){
        var mappedSubset = []

        for (var i=0; i<subsets.length; i++){
            let totalCapacity = 0;
            for (var j=0; j<subsets[i].length; j++){
                totalCapacity += subsets[i][j].bussSeats;
            }
            mappedSubset.push({
                Busses: subsets[i],
                totalCapacity:totalCapacity
            })
        }
        return mappedSubset
    }
    

}