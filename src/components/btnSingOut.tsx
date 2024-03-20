"use client"
import { signOut } from "next-auth/react"


const BtnSingOut = () => {
  return (
    <button className="w-full bg-gradient-to-r text-white from-sky-500 to-indigo-500 p-2 rounded-lg" onClick={() => signOut()}>Sign Out</button>
  )
}




export default BtnSingOut;