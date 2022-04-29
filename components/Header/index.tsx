import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const linkClass =
    'text-lg transition-opacity hover:opacity-70 border-b-2 border-transparent hover:border-blue-300'
  const activeLinkClass =
    'text-lg transition-opacity hover:opacity-70 border-b-2 border-blue-500'

  const router = useRouter()
  return (
    <header className='container mx-auto flex items-center justify-between py-5'>
      <Link href='/'>
        <a>
          <Image
            width={80}
            height={80}
            src='/favicon.ico'
            alt='Habit Tracker'
          />
        </a>
      </Link>

      <p className='text-4xl text-bold text-center'>Habit Tracker</p>

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
