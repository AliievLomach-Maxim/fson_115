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

export type CategoryType = {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

export const getNotes = async (categoryId?: string, title?: string) => {
  const { data } = await axios<NoteListType>('/notes', {
    params: { categoryId, title },
  })
  return data
}

export const getSingleNote = async (id: string) => {
  const { data } = await axios<NoteType>(`/notes/${id}`)
  return data
}

export const getCategories = async () => {
  const { data } = await axios<CategoryType[]>(`/categories`)
  return data
}
