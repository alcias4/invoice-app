import { User } from "next-auth"
import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials" 
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"


type TypeCredentials = Record<string, string> | undefined

export const optionNext = {
  providers:[
    Credentials({
      name:"credentials",
      credentials:{
        email: {label: "Email", type: "email"},
        password: {label: "Password" , type:"password"}
      },
      async authorize(credentials: TypeCredentials): Promise<User | null>{

        
        
        const useFound = await prisma.user.findUnique({
          where: {
            email:credentials?.email
          }
        })
    
        if(!useFound) return null

        if(typeof credentials?.password !== "undefined"){
          const session = await bcrypt.compare(credentials?.password, useFound.password)
          if(!session)return null
        }
        

        return {
          id: useFound.id.toString(),
          email:useFound.email,
          name: useFound.name,
          image: useFound.image
        }
      }
    })
  ],
  pages: {
    signIn:"/auth/login",
    error:"/auth/error"
  }
}

const handler = NextAuth(optionNext)

export {handler as GET, handler as POST}