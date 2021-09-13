
// request body for save bus
export interface ISaveBussRequest{

    bussName:string
    bussSeats:number
    
}


// request body for update bus
export interface IUpdateBussRequest{
    _id:string,
    bussName:string,
    bussSeats:number,
  
    
}
// request body for delete bus
export interface IDeleteBussRequest{
    _id:string
}

// request body for single bus
export interface ISingleBussRequest{
    _id:string
}