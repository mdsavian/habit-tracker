import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const linkClass =
    'text-lg transition-opacity hover:opacity-70 border-b-2 border-transparent hover:border-blue-300 text-white'
  const activeLinkClass =
    'text-lg transition-opacity hover:opacity-70 border-b-2 border-blue-500 text-white'

  const router = useRouter()
  return (
    <header className='container mx-auto flex items-center justify-between py-5'>
      <Link href='/'>
        <a>
          <Image
            width={80}
            height={80}
            src='/bullseye.png'
            alt='Habit Tracker'
          />
        </a>
      </Link>

      <nav className='flex gap-4'>
        <Link href='/'>
          <a className={router.pathname === '/' ? activeLinkClass : linkClass}>
            Home
          </a>
        </Link>

        <Link href='/habits'>
          <a
            className={
              router.pathname === '/habits' ? activeLinkClass : linkClass
            }
          >
            Habits
          </a>
        </Link>
      </nav>
    </header>
  )
}
export default Header
