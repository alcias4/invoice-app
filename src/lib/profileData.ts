
import { getServerSession } from "next-auth"
import prisma from "./prisma"
import { optionNext } from "@/app/api/auth/[...nextauth]/route"

const profileData = async () => {
  const session =await getServerSession(optionNext)
  if(session?.user){
    const useFound = await prisma.user.findUnique({
      where:{
        email: session.user.email || ""
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

    return res
  }


}

export default profileData;