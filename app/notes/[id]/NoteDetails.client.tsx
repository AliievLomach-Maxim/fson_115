'use client'

import { getSingleNote } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>()

  const { data: note } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  })

  const handleClick = () => {
    console.log('first')
  }
  return (
    <div>
      {note && (
        <>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </>
      )}
      <br />
      <button onClick={handleClick}>Edit</button>
      <br />
      <button onClick={handleClick}>Delete</button>
      <br />
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default NoteDetailsClient
