import axios from 'axios'

axios.defaults.baseURL = 'https://next-docs-api.onrender.com'

export type NoteType = {
  id: string
  title: string
  content: string
  categoryId: string
  createdAt: string
  updatedAt: string
}

export type NoteListType = {
  notes: NoteType[]
  total: number
}

export const getNotes = async () => {
  const { data } = await axios<NoteListType>('/notes')
  return data
}

export const getSingleNote = async (id: string) => {
  const { data } = await axios<NoteType>(`/notes/${id}`)
  return data
}
