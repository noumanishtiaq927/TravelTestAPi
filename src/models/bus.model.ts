import {Schema, model} from 'mongoose'
import { IBUSS } from '../types/documents/bus.document'


const IBussSchema = new Schema({
       
    
        bussName:{
           type:String,
           required:['true','please provide the food name']
        },

        bussSeats:{
           type:Number,
           required:['true','please provide the seats']
        },

        bussBookingDates:{
           type:Date,
        }
       
},{
    timestamps:true
})

export const bussSchema = model<IBUSS>('buss',IBussSchema)