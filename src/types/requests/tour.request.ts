
// request body for save tour
export interface ISaveTourRequest
{

  
    tourDestinations:string[],
    tourParticipants:number,
    tourBookingDate:string,
    tourBookingPerson:string
 
    
}


// request body for update tour
export interface IUpdateTourRequest
{
    _id:string,
    tourDestinations:string[],
    tourParticipants:number,
    tourBookingDate:string,
    tourBookingPerson:string
    
  
}
// request body for delete tour
export interface IDeleteTourRequest{
    _id:string
}

