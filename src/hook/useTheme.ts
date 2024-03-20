import { useEffect, useState } from "react"


const useTheme = () => {
  const [theme, setTheme] = useState(false)
  const [status ,setStatus] = useState(false)
  useEffect(()=> {

    if(theme === false){
      document.querySelector("html")?.classList.add("dark")
    } 
    if(theme === true){
      document.querySelector("html")?.classList.remove("dark")
    }

  },[theme])

  useEffect(()=> {
    if(status === true){
      document.getElementById("body")?.classList.add("dark:bg-black/20")
    } 
    if(status === false){
      document.getElementById("body")?.classList.remove("dark:bg-black/20")
    }

  },[status])

  return {theme, setTheme, status, setStatus}
}


export default useTheme;