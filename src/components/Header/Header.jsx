import React from 'react'
import styles from "./Header.module.css"



function Header() {
  

  return (
    <div className={styles.header}>
      <img src="./imagenes/termometro.png" alt="" />
     <h1>IMSIDO</h1>
    </div>
  )
}

export default Header