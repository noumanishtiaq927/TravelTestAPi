import {Document} from "mongoose"


export interface ITOUR extends Document{
    _id:string,
    tourDestinations:string[],
    tourParticipants:number,
    tourBookingDate:string,
    tourBookingPerson:string,
    busId:string
    createdAt?:string,
    updatedAt?:string
}


