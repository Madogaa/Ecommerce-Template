import React from 'react'

function Logo() {
   const style = {
        left: "50%",
        transform: 'translateX(-50%)',
        position: 'absolute',
        top: "12px",
        width: "10rem",
   }
  return (
    <img style={style} src="/images/Bershka_logo.svg" alt="Logo" />
  )
}

export default Logo;