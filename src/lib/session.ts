import { getServerSession } from "next-auth"





export const session =async () => {
 const session =await  getServerSession()
 if(session?.user){
  return session.user
 } else {
  return null
 }
 
}