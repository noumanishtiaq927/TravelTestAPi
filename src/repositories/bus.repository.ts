import { bussSchema } from "../models/bus.model"
import { IBUSS } from "../types/documents/bus.document"


export class BussRepository{
    constructor(){}
    // get all the bus from database
    getAllBuss(){
        return bussSchema.find()
    }
 
    // saving the bus into the database
    saveBuss(addBuss:IBUSS){
    return new bussSchema(addBuss).save()
    }
    //find the bus bu id and update it
    updateBuss(editBuss:IBUSS){
        return bussSchema.findByIdAndUpdate(editBuss._id,editBuss,{new:true})
    }
    // delete the bus 
   deleteBuss(bussId:string){
        return bussSchema.findByIdAndDelete(bussId)
    }
    async getAvailableBussesByDate(date: Date) {
        function filterAvailable(elem: any, index: number, array: any) {
            return elem.bussBookingDates.indexOf(date) == -1
        }
        var availableBusses = []
        var allBusses = await bussSchema.find({
            $gt: new Date(date),
            $lt: new Date(date)
        });
        availableBusses = allBusses;
        //available_busses = all_busses.filter(FilterAvailable);
        return availableBusses;
    }
}