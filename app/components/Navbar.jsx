import Image from 'next/image'
import Link from 'next/link'
import Logo from './logo.jpg'

const Navbar = () => {
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
          <Link href="/tickets">Tickets</Link>
        </nav>
    </div>
  )
}

export default Navbar