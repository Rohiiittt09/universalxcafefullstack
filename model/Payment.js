import mongoose from "mongoose";
import cart from "./Order";

const paymentSchema = new mongoose.Schema({
        email: { type: String, required: true },
    phone: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    orderId: { type: String, required: true },
    status:{type:Boolean, default: false},
    createdAt: { type: Date, default: Date.now }   ,
    pregress:{type:String,default:"pending"},
    cart:[
        {
            _id: false,
            img:{type:String},
            item:{type:String,required:true},
            type:{type:String},
            qty:{type:Number,required:true},
            price:{type:Number,required:true},
            
        }
    ]
});

const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
export default Payment;