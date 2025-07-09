import { getSingleNote } from '@/lib/clientApi'
import NoteDetailsClient from './NoteDetails.client'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const res = await params
  const note = await getSingleNote(res.id)
  return {
    title: note.title,
    description: note.content,
  }
}

const NoteDetails = async ({ params }: Props) => {
  const res = await params

  const queryClient = new QueryClient()

  queryClient.prefetchQuery({
    queryKey: ['note', res.id],
    queryFn: () => getSingleNote(res.id),
  })

  return (
    <div>
      <h1>NoteDetails</h1>
      <br />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient />
      </HydrationBoundary>
    </div>
  )
}

export default NoteDetails
