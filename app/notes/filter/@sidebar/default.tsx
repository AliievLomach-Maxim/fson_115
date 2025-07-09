import { getCategories } from '@/lib/clientApi'
import Link from 'next/link'

const Sidebar = async () => {
  const categories = await getCategories()

  return (
    <div>
      <h2>Sidebar</h2>
      <br />
      <Link href='/notes/actions/create'>Create new note</Link>
      <br />
      <hr />
      <br />
      {categories.map((cat) => (
        <li key={cat.id} style={{ fontSize: '12px' }}>
          <Link href={`/notes/filter/${cat.id}`}>{cat.name}</Link>
        </li>
      ))}
    </div>
  )
}

export default Sidebar
