"use server"
import mongoose from "mongoose"
import User from "@/model/User"
import menu from "@/model/Menu"
import cart from "@/model/Order"
import { redirect } from "next/navigation"
import Payment from "@/model/Payment" 
import Razorpay from "razorpay"

export const userdate =async(email)=>{
  
    await mongoose.connect(process.env.MONGO_URL)
    
     const u = await User.findOne({email}).lean()
    if(email!=process.env.ADMIN){
        redirect("/")
        alert("sorry you are not admin")
        return
    }     
  if(!u){
    
    redirect("/")
    alert("user not found")
  }
 return {
   ...u,
   _id:u._id.toString()
 }
}


export const addmenuu = async(data)=>{
  await mongoose.connect(process.env.MONGO_URL)
  await menu.create({
    id:data.id,
    item:data.item,
    type:data.type,
    price:data.price,
    img:data.img
  })
  return true

}

export const fetchmenu = async()=>{
   await mongoose.connect(process.env.MONGO_URL)
   const x = await menu.find().lean()
  const data = x.map((e) => ({
    ...e,
    _id: e._id.toString()
}))

return data
}

export const upcart = async (email, data) => {
  await mongoose.connect(process.env.MONGO_URL)
  const b = await cart.findOne({ email: email })
  let i = b.cart.find((e) => e.id == data.id)
  if(!i){
    await cart.updateOne(
    { email },
    {
      $push: {
        cart: {
          img:data.img,
          item: data.item,
          type: data.type,
          qty: 1,
          price: data.price,
          id:data.id
        }
      }
    }
  )
  }
  
}
export const addcart = async(email,name,data)=>{
  await mongoose.connect(process.env.MONGO_URL)
  const a = await cart.findOne({email:email})
  let i = a?.cart.find((e)=>e.id==data.id )
  if(!i){
    await cart.create({
    img:data.img, 
    email:email,
    name:name,
    cart:[
     { item:data.item,
      type:data.type,
      qty:1,
      price:data.price,
      id:data.id
      
     },
     
    ],
   
    paymentStatus:false

  })
  }

}
export const fetchcart=async(email)=>{
  await mongoose.connect(process.env.MONGO_URL)
  const u = await cart.findOne({email:email}).lean()
  if(!u){
   return null
  }
 return {
   ...u,
   _id:u._id.toString()
 }
}
export const deletecart=async(email,id)=>{
  await mongoose.connect(process.env.MONGO_URL)
  await cart.updateOne(
    {email},
    {
    $pull: {
      cart: {
        id: id
      }
    }
  }
  )


}

export const incqty = async(email,id)=>{
  await mongoose.connect(process.env.MONGO_URL)
  await cart.updateOne({
    email,
    "cart.id": id
  },
  {
    $inc: {
      "cart.$.qty": 1
    }
  }
)
}
export const decqty = async(email,id)=>{
  await mongoose.connect(process.env.MONGO_URL)
  await cart.updateOne({
    email,
    "cart.id": id
  },
  {
    $inc: {
      "cart.$.qty": -1
    }
  }
)
}

export const initiate = async (amount,form,cart,email) => {
    await mongoose.connect(process.env.MONGO_URL)
    var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })
    let options = {
        amount:Number.parseInt(amount),
        currency:"INR"
    }
    const order = await instance.orders.create(options)
    await Payment.create({name:form.name,
       email:email,
       address:form.Address,
    orderId:order.id,
    phone:form.phone,
    amount:amount
    ,cart:cart})
    return order    
}

export const fetchhistory = async(email)=>{
  await mongoose.connect(process.env.MONGO_URL)

  const h = await Payment.find({ email:email,status:true }).sort({ createdAt: -1 }).lean()

  return h.map(item => ({
    ...item,
    _id: item._id.toString()
  }))
}

export const deletmenu=async(id)=>{
  await mongoose.connect(process.env.MONGO_URL)
  await menu.deleteOne({id:id})
}

export const totalorder=async()=>{
  await mongoose.connect(process.env.MONGO_URL)
  const a = await Payment.find({status:"true"}).lean()
   return a.map(item => ({
    ...item,
    _id: item._id.toString()
  }))
}
export const fetchrev=async()=>{
  await mongoose.connect(process.env.MONGO_URL)
  const c = await Payment.find({status:"true"}).lean()  
  let rev = 0
  c.map((e)=>{
    rev+=e.amount
  })
  return rev
}

export const fetchpend=async()=>{
  await mongoose.connect(process.env.MONGO_URL)
  const d = await Payment.find({
  status: true,
  pregress: "pending"
}).sort({ createdAt: -1 }).lean()
   return d.map(item => ({
    ...item,
    _id: item._id.toString()
  }))

  
}
export const fetchcomp=async()=>{
  await mongoose.connect(process.env.MONGO_URL)
  const k = await Payment.find({
  status: true,
  pregress: "complete"
}).sort({ createdAt: -1 }).lean()
   return k.map(item => ({
    ...item,
    _id: item._id.toString()
  }))
}

export const completeord = async(orderid)=>{
  await mongoose.connect(process.env.MONGO_URL)
  await Payment.findOneAndUpdate({orderId:orderid}, {pregress:"complete"})
}
