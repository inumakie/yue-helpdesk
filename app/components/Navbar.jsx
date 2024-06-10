import Image from 'next/image'
import Link from 'next/link'
import Logo from './logo.jpg'
import LogoutButton from './LogoutButton'

const Navbar = ({ user }) => {
  return (
    <div>
        <nav>
          <Image
            src={Logo}
            alt="Helpdesk"
            width={70}
            quality={100}
            placeholder="blur"
          />
          <h1>Yue Helpdesk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets" className="mr-auto">Tickets</Link>
          { user && <span>Hi, {user.email}</span>}
          <LogoutButton />
        </nav>
    </div>
  )
}

export default Navbar