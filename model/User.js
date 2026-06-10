import mongoose from "mongoose";


const userSchemna = new  mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true,unique:true }
})

const User = mongoose.models.user || mongoose.model("user",userSchemna)
export default User