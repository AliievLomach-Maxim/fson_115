import { NoteType } from '@/lib/api'
import Link from 'next/link'

type Props = {
  item: NoteType
}
const NoteItem = ({ item }: Props) => {
  return (
    <li>
      <Link href={`/notes/${item.id}`}>{item.title}</Link>
    </li>
  )
}

export default NoteItem
