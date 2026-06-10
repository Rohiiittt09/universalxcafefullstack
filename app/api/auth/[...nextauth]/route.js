import NextAuth from "next-auth"
import mongoose from "mongoose";
import User from "@/model/User";

import GoogleProvider from "next-auth/providers/google"
export const handler = NextAuth(
    {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks:{
    async signIn({ user, account, profile, email, credentials }){
      if(account.provider="google"){
        await mongoose.connect(process.env.MONGO_URL)
        const currenUser = await User.findOne({email:user.email})
        if(!currenUser){
          const newUser = await User({
            name : user.name,
            email:user.email
          })
          await newUser.save()
        }

        return true
      }
    }
  }
}
)
export { handler as GET, handler as POST };