import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    email:{type:String,required:true},
    name:{type:String,required:true},
    cart:[
        {
            _id: false,
            item:{type:String,required:true},
            img:{type:String},
            type:{type:String},
            qty:{type:Number,required:true},
            price:{type:Number,required:true},
            id:{type:String,required:true,unique:true}
        }
    ],
    createdAt:{type: Date, default: Date.now},
    

})

const cart = mongoose.models.cart||mongoose.model("cart",orderSchema)
export default cart