"use client"

import Btn from "@/components/Btn";
import Input from "@/components/Input";
import Title from "@/components/Title";

import { useRouter } from "next/navigation";






const Register = () => {


  const router = useRouter()
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    const res = await fetch("/api/auth/user",{
      method:'POST',
      body:JSON.stringify(data)
    })

    const response = await res.json()
    if(response.error){
      alert(response.error)
    } else {
      router.push("/auth/login")
    }
    

  }
  return (
    <div className="flex flex-col justify-center w-full h-full p-5">
      <figure className="w-full flex justify-center h-[200px]   bg-no-repeat bg-center">
        <img src="/img/light-register.svg" alt="" />
      </figure>
      <form autoComplete="off" onSubmit={onSubmit} className="h-[60%] flex flex-col gap-5 pt-5 items-center">
        <Title text="Register"/>
        <Input placeholder="Name" type="text" name="userName"/> 
        <Input placeholder="Email" type="email" name="email"/> 
        <Input placeholder="Password" type="password" name="password"/> 
        <Btn text="Sign up"/>
      </form>
      <div className="w-full flex gap-2 justify-center">
        <p>if you already have account</p>
        <button type="button" className="opacity-50"  onClick={() => router.push("/auth/login")}>Sign in</button>
      </div>
    </div>
  )
}

export default Register;