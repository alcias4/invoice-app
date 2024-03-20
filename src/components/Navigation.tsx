"use client"
import {IconMenu2} from "@tabler/icons-react"
import MovilNav from "./MobilNav";
import useTheme from "@/hook/useTheme";
import Link from "next/link";
import { user } from "@/type/types";
import { useRouter } from "next/navigation";


interface Props{
  user: user | null
}

const Navigation:React.FC<Props> = ({user}) => {
  const router = useRouter()
  const {setTheme,theme,status, setStatus} = useTheme()
  return (
    <>
    <nav className="w-full flex justify-between bg-[#1e2139] items-center h-[70px] text-white font-bold text-lg relative min-h-[60px] shadow-xl dark:shadow-[#464d8583] shadow-[#b1bcf8]">
      <Link className="bg-[#7c5dfa] w-[70px] flex justify-center rounded-r-2xl h-full items-center relative" href={"/"}>
        <img className="w-[40px] z-10" src="/img/logo.svg" alt="alt" />
        <div className="w-full h-[50%] absolute bg-[#9277ff] bottom-0 rounded-tl-2xl rounded-br-2xl " />
      </Link>
      <div className="flex gap-4 pr-5 h-full">
        <button className="pr-4 border-r-[1px] border-white/50 h-full flex items-center justify-center" onClick={()=> {setTheme(!theme)}}>
          <img className="w-[20px]" src={!theme?"/img/icon-sun.svg":"/img/icon-moon.svg"} alt="" />
        </button>
        {
          !user?
          <button className="flex gap-4 h-full items-center justify-center text-[16px]" 
            onClick={() => setStatus(!status)}>
            <IconMenu2 />
          </button>:
          <button className="flex gap-4 h-full items-center justify-center text-[16px]" onClick={()=> router.push("/auth/profile")}>
            <img className={`w-[25px]  ${user.image === "user-circle.svg"?"invert":"w-[30px] rounded-full"}`} src={`/img/${user.image}`} alt="" />
          </button>
        }
      </div>
    </nav>
    <MovilNav  status={status} setStatus={setStatus}/> 
  </>
  )
}

export default Navigation;