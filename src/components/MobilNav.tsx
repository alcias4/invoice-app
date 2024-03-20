
import { user } from "@/type/types"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"


interface Props {
  status: boolean
  setStatus:Dispatch<SetStateAction<boolean>>

}




const MovilNav: React.FC<Props> =({status,setStatus}) => {

  return (
    <ul className={`absolute bg-[#1e2139] w-[80%] mt-[100px] flex flex-col justify-center items-center gap-5 py-5 rounded-2xl ${!status?"hidden": ""} z-10`}>
      <li onClick={() => setStatus(false)}><Link href={"/auth/login"}>Login</Link></li>
      <li onClick={() => setStatus(false)}><Link href={"/auth/register"}>Register</Link></li>
    </ul>
  )
}

export default MovilNav;