import { tourSchema } from "../models/tour.model"
import { ITOUR } from "../types/documents/tour.document"



export class TourRepository{
    constructor(){}
   
    // saving the tour into the database
    saveTour(addTour:ITOUR){
    return new tourSchema(addTour).save()
    }
   
}