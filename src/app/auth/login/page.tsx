"use client"
import Btn from "@/components/Btn";
import Input from "@/components/Input";
import Title from "@/components/Title";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";



const PageLogin = () => {
  const router = useRouter()
  const onSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const dataForm = new FormData(event.target as HTMLFormElement)
    const {email, password} = Object.fromEntries(dataForm.entries())


    const res = await signIn("credentials", {
      email:  email,
      password: password,
      redirect: false
    })
  
    if(res?.status === 200){
      const re = await fetch("/api/auth/user")
      const js = await re.json()
      localStorage.setItem("data", JSON.stringify(js))
      router.push("/auth/profile")
      router.refresh()
    }else {
      alert("error password or email")
    }
  }



  return (
    <div className="flex flex-col justify-center w-full h-full p-5">
      <figure className="w-full flex justify-center h-[220px]   bg-no-repeat bg-center">
        <img src="/img/light-register.svg" alt="" />
      </figure>
      <form onSubmit={onSubmit} autoComplete="off"  className="h-[60%] flex flex-col gap-5 pt-5 items-center">
        <Title text="Hello Again!"/>
        <Input placeholder="Email" type="email" name="email"/> 
        <Input placeholder="Password" type="password" name="password"/> 
        <Btn text="Sign up"/>
      </form>
      <div className="w-full flex gap-2 justify-center">
        <p>if you already have account</p>
        <button className="opacity-50"  onClick={() => router.push("/auth/register")}>Sign in</button>
      </div>
    </div>
  )
}

export default PageLogin;