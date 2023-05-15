import React, { ReactElement } from 'react'
import { createPortal } from 'react-dom'
import styles from './ModalWindow.module.scss'

export const ModalWindow = ({ children }: { children: ReactElement }) => {
  return (
    <>
      {createPortal(
        <div className={styles.wrap}>{children}</div>,
        document.body
      )}
    </>
  )
}
