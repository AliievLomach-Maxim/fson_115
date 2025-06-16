import Link from 'next/link'
import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/notes'>Notes</Link>
          </li>
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
