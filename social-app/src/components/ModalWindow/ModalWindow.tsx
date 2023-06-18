import React, { ReactElement, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './ModalWindow.module.scss'

export const ModalWindow = ({
  setIsFormVisible,
  children
}: {
  setIsFormVisible: (isLoginFormVisible: boolean) => void
  children: ReactElement
}) => {
  const div = document.createElement('div')

  const closeOnClickAction = (e: any) => {
    ;(e.target as Element).classList.contains(`${styles.b__modal_window}`) &&
      setIsFormVisible(false)
  }
  const closeOnEscapeAction = (e: any) => {
    e.key === 'Escape' && setIsFormVisible(false)
  }

  useEffect(() => {
    div.setAttribute('class', `${styles.b__modal_window}`)
    document.body.appendChild(div)
    const body = document.querySelector('body') as HTMLElement
    body.style.overflow = 'hidden'
    div.addEventListener('click', (e) => closeOnClickAction(e))
    document.addEventListener('keydown', (e) => closeOnEscapeAction(e))

    return () => {
      body.style.overflow = 'auto'
      div.removeEventListener('click', (e) => closeOnClickAction(e))
      document.removeEventListener('keydown', (e) => closeOnEscapeAction(e))
      div.remove()
    }
  }, [div])
  return (
    <>
      {createPortal(
        <>
          {children}
          <div className={styles.b__modal_window__btn_wrap}>
            <button
              onClick={() => setIsFormVisible(false)}
              className={styles.b__modal_window__btn}
            />
          </div>
        </>,
        div
      )}
    </>
  )
}
