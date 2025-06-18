// SSR

import NoteList from '@/components/NoteList/NoteList'
import { getNotes } from '@/lib/api'

// ISR
// export const revalidate = 5

//  /notes - list
//  /notes/qwebbjsab12312 - details

const Notes = async () => {
  const notes = await getNotes()
  return (
    <div>
      <h1>Notes</h1>
      <br />
      <NoteList items={notes} />
    </div>
  )
}

export default Notes

// 'use client'
// // CSR
// // SSR

// import NoteList from '@/components/NoteList/NoteList'
// import { getNotes, NoteListType } from '@/lib/api'
// import { useEffect, useState } from 'react'

// const Notes = () => {
//   const [notes, setNotes] = useState<NoteListType | null>(null)

//   useEffect(() => {
//     const fetchNotes = async () => {
//       const responseNotes = await getNotes()
//       setNotes(responseNotes)
//     }
//     fetchNotes()
//   }, [])

//   const handleClick = () => {
//     console.log('CLICK')
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <br />

//       {notes && <NoteList items={notes} />}
//       <br />
//       <br />
//       <br />
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default Notes
