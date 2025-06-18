import { NoteListType } from '@/lib/api'
import NoteItem from '../NoteItem/NoteItem'

type Props = {
  items: NoteListType
}
const NoteList = ({ items }: Props) => {
  return (
    <ul>
      {items.notes.map((el) => (
        <NoteItem key={el.id} item={el} />
      ))}
    </ul>
  )
}

export default NoteList
