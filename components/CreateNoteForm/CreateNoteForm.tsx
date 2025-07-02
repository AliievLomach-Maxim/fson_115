'use client'

import { CategoryType, createNote, CreateNoteRequest } from '@/lib/api'
import { useNoteDraft } from '@/lib/store/noteDraftStore'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ChangeEvent } from 'react'

type Props = {
  categories: CategoryType[]
}
const CreateNoteForm = ({ categories }: Props) => {
  const router = useRouter()
  const { draft, setDraft, clearDraft } = useNoteDraft()
  console.log('draft', draft)
  const { mutate } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      clearDraft()
      router.push('/notes')
    },
  })

  const handleCreate = (formData: FormData) => {
    const newNote = Object.fromEntries(formData) as CreateNoteRequest
    mutate(newNote)
  }

  const handleCancel = () => {}

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setDraft({ ...draft, [name]: value })
  }

  return (
    <form action={handleCreate}>
      <label>
        Title
        <br />
        <input type='text' name='title' defaultValue={draft.title} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Content
        <br />
        <textarea
          id='content'
          name='content'
          defaultValue={draft.content}
          onChange={handleChange}
        ></textarea>
      </label>
      <br />
      <br />
      <label>
        Select pls Category
        <br />
        <select
          id='category'
          name='categoryId'
          onChange={handleChange}
          defaultValue={draft.categoryId}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <br />
      <hr />
      <br />
      <button type='submit'>Create</button>
      <br />
      <br />
      <button type='button' onClick={handleCancel}>
        Cancel
      </button>
    </form>
  )
}

export default CreateNoteForm
