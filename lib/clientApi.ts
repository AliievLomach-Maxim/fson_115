import { nextServer } from './api'

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

export type CreateNoteRequest = {
  title: string
  content: string
  categoryId: string
}

export type User = {
  id: string
  email: string
  userName: string
  role: string
  createdAt: string
  updatedAt: string
}

export type RegisterRequest = {
  userName: string
  email: string
  password: string
}

export type LoginRequest = {
  email: string
  password: string
}

export type ServerBoolResponse = {
  success: boolean
}

export const getNotes = async (categoryId?: string, title?: string) => {
  const { data } = await nextServer<NoteListType>('/notes', {
    params: { categoryId, title },
  })
  return data
}

export const getSingleNote = async (id: string) => {
  const { data } = await nextServer<NoteType>(`/notes/${id}`)
  return data
}

export const getCategories = async () => {
  const { data } = await nextServer<CategoryType[]>(`/categories`)
  return data
}

export const createNote = async (payload: CreateNoteRequest) => {
  const { data } = await nextServer.post<NoteType>(`/notes`, payload)
  return data
}

export const register = async (payload: RegisterRequest) => {
  const { data } = await nextServer.post<User>(`/auth/register`, payload)
  return data
}

export const login = async (payload: LoginRequest) => {
  const { data } = await nextServer.post<User>(`/auth/login`, payload)
  return data
}

export const checkSession = async () => {
  const { data } = await nextServer<ServerBoolResponse>(`/auth/session`)
  return data.success
}

export const getMe = async () => {
  const { data } = await nextServer<User>(`/auth/me`)
  return data
}

export const logOut = async () => {
  await nextServer.post<ServerBoolResponse>(`/auth/logout`)
}
