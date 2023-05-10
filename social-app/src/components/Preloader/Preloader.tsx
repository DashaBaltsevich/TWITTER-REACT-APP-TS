import React from 'react'
import PreloaderSvg from '../../assets/preloader.svg'

export const Preloader = () => {
  return (
    <img
      src={PreloaderSvg}
      alt="preloader"
      style={{
        position: 'absolute',
        top: '40%',
        left: '50%'
      }}
    />
  )
}
