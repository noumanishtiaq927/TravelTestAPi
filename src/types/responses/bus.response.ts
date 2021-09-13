
// response for save bus
export interface ISaveBussResponse 
{
    _id:string,
    bussName:string,
    bussSeats:number,
    bussBookingDates:string[],
    createdAt?:string,
    updatedAt?:string
}
//response for update bus
export interface IUpdateBussResponse 
{
    _id:string,
    bussName:string,
    bussSeats:number,
    bussBookingDates:string[],
    createdAt?:string,
    updatedAt?:string
}
// response for delete bus
export interface IDeleteBussResponse 
{
    message :string
}

// response for single bus
export interface ISingleBussResponse 
{
    _id:string,
    bussName:string,
    bussSeats:number,
    bussBookingDates:string[],
    createdAt?:string,
    updatedAt?:string
}
//error response interface
export interface IBusErrorResponse {
    error:{
        message:string
    }
}