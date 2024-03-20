import {IconUser, IconLock} from "@tabler/icons-react"


type ty  = "text" | "password" | "email"

interface Props {
  placeholder:string
  name: string
  type: ty
}


const Input: React.FC<Props> = ({placeholder,name, type}) => {
  return (

    <div className="w-full flex flex-col relative justify-center">
      {
        type === "password"? 
        <IconLock  className="absolute left-2 opacity-50
        "/>:
        <IconUser className="absolute left-2 opacity-50"/>
      }
      <input className="dark:bg-[#1e2139] bg-[#d6d7db] p-4 rounded-lg w-full h-full pl-10 outline-none focus:none" type={type} placeholder={placeholder} name={name}/>
    </div>
  )
}

export default Input;