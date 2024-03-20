import Link from "next/link"









const ErrorPage = () => {
  return (
    <div>
      Error Not Sign in
      <Link href={"/auth/login"}>Return Sing in</Link>
    </div>
  )
}

export default ErrorPage;