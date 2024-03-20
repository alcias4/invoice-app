import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bycript from "bcrypt"
import { getServerSession } from "next-auth";
import { optionNext } from "../[...nextauth]/route";
import { user } from "@/type/types";

interface Data {
  userName: string
  email: string
  password:string 
}


export async function GET() {
  const session =await getServerSession(optionNext)

  if (session !== null){
    const useFound = await prisma.user.findUnique({
      where:{
        email: session?.user?.email || ""
      }
    })
  
  
    const res = await prisma.invoicen.findMany({
      where:{
        invoinceId:useFound?.id
      },
      include:{
        item:true
      }
    })
    return NextResponse.json(res)
  }

}


export async function POST (request:NextRequest) {
 

  const dat:Data = await request.json()

  const useFound  = await prisma.user.findUnique({
    where:{
      email: dat.email
    }
  })

  
  if(useFound){
    return NextResponse.json({error:"exist"})
  } else {
    const pass = await bycript.hash(dat.password,10)
    const res  = await prisma.user.create({
      data:{
        email: dat.email,
        name: dat.userName,
        password:pass,
        image: "user-circle.svg"
      }
    })
    
    return NextResponse.json(res)
  }

}