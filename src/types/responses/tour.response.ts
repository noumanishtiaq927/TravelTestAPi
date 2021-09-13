
// response for save tour
export interface ISaveTourResponse {
    _id:string,
    tourDestinations:string[],
    tourParticipants:number,
    tourBookingDate:string,
    tourBookingPerson:string
    createdAt?:string,
    updatedAt?:string
}
//response for update tour
export interface IUpdateTourResponse {
    _id:string,
    tourDestinations:string[],
    tourParticipants:number,
    tourBookingDate:string,
    tourBookingPerson:string
    createdAt?:string,
    updatedAt?:string
}
// response for delete tour
export interface IDeleteTourResponse {
    
    message :string
    
}
//error response interface
export interface ITourErrorResponse {
    error:{
        message:string
    }
}
