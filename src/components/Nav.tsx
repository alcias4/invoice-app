import { session } from "@/lib/session";
import Navigation from "./Navigation";




const Nav = async () => {
  const user =await session()
  return (
    <Navigation user={user}/>
  )
}

export default Nav;