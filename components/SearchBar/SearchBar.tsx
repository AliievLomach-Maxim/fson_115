'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

type Props = { categoryId: string; titleValue: string }

const SearchBar = ({ categoryId, titleValue }: Props) => {
  const [searchValue, setSearchValue] = useState(titleValue ?? '')
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/notes/filter/${categoryId}/${searchValue}`)
  }

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' value={searchValue} onChange={handleChange} />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar
