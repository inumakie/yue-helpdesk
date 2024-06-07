import Link from "next/link"

export default function AuthLayout( {children} ) {
  return (
    <>
        <nav>
            <h1>Yue-Helpdesk</h1>
            <Link href="/signup">Sign Up</Link>
            <Link href="/login">Login</Link>
        </nav>
        {children}
    </>
  )
}
