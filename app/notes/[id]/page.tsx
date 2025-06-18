import { getSingleNote } from '@/lib/api'
import NoteDetailsClient from './NoteDetails.client'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

type Props = {
  params: Promise<{ id: string }>
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
