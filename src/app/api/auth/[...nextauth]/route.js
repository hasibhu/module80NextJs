import { connectDB } from "@/lib/connectDB";
import  NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET, //helps keeping the login persistent, NEXT_PUBLIC_AUTH_SECRET is genereated by running "openssl rand -base64 32" in the terminal
    session: {
        strategy: 'jwt',
        maxAge: 30*24*60*60
    },

    providers: [
        GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET
            }),
        CredentialsProvider({
            credentials: {
                email: {},
                 password: {}
            },
           
            async authorize(credentials){
                const { email, password } = credentials;

                if (!email || !password) {
                    return null;
                }
                

                const db = await connectDB();


                const currentUser = await db.collection("userModule80").findOne({ email });


                if(!currentUser){ return null}


                const passwordMatched = bcrypt.compareSync( password, currentUser.password)


                if (!passwordMatched) {
                    return null;
                }




                return currentUser;

            }
        })

        
    ],
    
    pages: {
        signIn: '/login'
    }
})


export {handler as GET, handler as POST}