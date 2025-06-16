import Header from '@/components/Header/Header'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const ProfileLayout = ({ children }: Props) => {
  return (
    <div>
      {children}
      <hr />
      <Header />
    </div>
  )
}

export default ProfileLayout
