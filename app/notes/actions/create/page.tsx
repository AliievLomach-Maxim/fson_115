// ssr

import CreateNoteForm from '@/components/CreateNoteForm/CreateNoteForm'
import { getCategories } from '@/lib/clientApi'

const CreateNotePage = async () => {
  const categories = await getCategories()
  return (
    <div>
      <CreateNoteForm categories={categories} />
    </div>
  )
}

export default CreateNotePage
