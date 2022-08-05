import mongoose from "mongoose";

const Schema= mongoose.Schema

const Orders = new Schema({
    
    name: String,
    lastName: String,
    adress: String,
    number: String,
    email: String,
    id: String
}) 

export default mongoose.model('Orders', Orders)

