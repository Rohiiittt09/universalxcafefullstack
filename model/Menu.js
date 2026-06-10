import mongoose from "mongoose";


const menuSchema = new mongoose.Schema({
    id:{type:String,required:true,unique:true},
    item:{type:String,required:true},
    img:{type:String},
    price:{type:Number,required:true}, 
    type:{type:String}
})
const menu = mongoose.models.menu||mongoose.model("menu",menuSchema)
export default menu
