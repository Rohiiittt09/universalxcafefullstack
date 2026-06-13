import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import mongoose from "mongoose";
import Payment from "@/model/Payment";
import cart from "@/model/Order";

export const POST = async (req) => {
    await mongoose.connect(process.env.MONGO_URL);
    const formData = await req.formData()
    const data = {
   razorpay_payment_id:
      formData.get("razorpay_payment_id"),

   razorpay_order_id:
      formData.get("razorpay_order_id"),

   razorpay_signature:
      formData.get("razorpay_signature")
}
    const y = await Payment.findOne({ orderId: data.razorpay_order_id })
     if(!y){
        return NextResponse.json({message:"Payment not found"}, {status:404})
    }
    const x = validatePaymentVerification({
            order_id: data.razorpay_order_id,
            payment_id: data.razorpay_payment_id},
             data.razorpay_signature,process.env.KEY_SECRET)
             if(x){
                await Payment.findOneAndUpdate({orderId:data.razorpay_order_id}, {status:true})
                await cart.deleteOne({email:y.email})
                return NextResponse.redirect(`https://universalxcafefullstackk.vercel.app/cart/?success=true`)
             }else{
                return NextResponse.redirect(`https://universalxcafefullstackk.vercel.app/cart/?success=true`)
             }
}
