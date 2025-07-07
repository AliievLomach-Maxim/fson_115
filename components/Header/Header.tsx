import Link from 'next/link'
import css from './Header.module.css'
import { getCategories } from '@/lib/api'

const Header = async () => {
  const categories = await getCategories()

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
            <ul>
              <li style={{ fontSize: '12px' }}>
                <Link href={`/notes/filter/all`}>All notes</Link>
              </li>
              {categories.map((cat) => (
                <li key={cat.id} style={{ fontSize: '12px' }}>
                  <Link href={`/notes/filter/${cat.id}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
          <li>
            <Link href='/sign-in'>Login</Link>
          </li>
          <li>
            <Link href='/sign-up'>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
