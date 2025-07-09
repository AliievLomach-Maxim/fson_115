import Modal from '@/components/Modal/Modal'
import { getSingleNote } from '@/lib/clientApi'

type Props = {
  params: Promise<{ id: string }>
}

const Preview = async ({ params }: Props) => {
  const { id } = await params

  const notePreview = await getSingleNote(id)

  return (
    <div>
      <Modal>
        <h2>{notePreview.title}</h2>
        <p>{notePreview.content}</p>
      </Modal>
    </div>
  )
}

export default Preview
