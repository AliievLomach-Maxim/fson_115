import { getCategories } from '@/lib/api'
import Link from 'next/link'

const Sidebar = async () => {
  const categories = await getCategories()

  return (
    <div>
      <h2>Sidebar</h2>
      {categories.map((cat) => (
        <li key={cat.id} style={{ fontSize: '12px' }}>
          <Link href={`/notes/filter/${cat.id}`}>{cat.name}</Link>
        </li>
      ))}
    </div>
  )
}

export default Sidebar
