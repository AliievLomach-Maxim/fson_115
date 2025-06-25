'use client'

import { useRouter } from 'next/navigation'
import css from './Modal.module.css'
type Props = {
  children: React.ReactNode
}
const Modal = ({ children }: Props) => {
  const router = useRouter()

  const handleClose = () => {
    router.back()
  }
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        {children}
        <button onClick={handleClose} className={css.close}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
