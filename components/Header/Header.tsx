import Image from 'next/image'
import Link from 'next/link'

const Header = () => (
  <header className='container mx-auto flex items-center justify-between py-5'>
    <Link href='/'>
      <a>
        <Image width={80} height={80} src='/favicon.ico' />
      </a>
    </Link>

    <p>Habit Tracker</p>
  </header>
)

export default Header
