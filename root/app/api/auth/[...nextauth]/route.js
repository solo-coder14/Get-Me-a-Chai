import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import mongoose from 'mongoose';
import User from "@/models/User.js";
import Payment from '@/models/Payment';
import connectDb from '@/db/connectDb';

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider == 'github') {
        await connectDb();
        //Check if the user already exists in the database
        const currentUser = await User.findOne({ email: user.email })
        if (!currentUser) {
          //create a new user
          await User.create({
            email: user.email,
            username: user.name,
          })
        }
        return true;
      }
    },
    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user.email })
      session.user.name = dbUser.username
      return session;
    },
  }
})


export { handler as GET, handler as POST }