import {Schema, model} from 'mongoose'
import { ITOUR } from '../types/documents/tour.document'



const ITourSchema = new Schema({
        tourDestinations:{
           type:Array,
          
        },
        tourParticipants:{
           type:Number,
           
        },
        tourBookingDate:{
           type:Date,
        },
        tourBookingPerson:{
            type:String
        },
        busId:[{
            type:Schema.Types.ObjectId,
            ref:'buss'
        }]
       
},{
    timestamps:true
})

export const tourSchema = model<ITOUR>('tour',ITourSchema)