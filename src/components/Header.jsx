import PropTypes from 'prop-types'
import { useState } from 'react'

function Header({text, bgColor, textColor}) {
  
  const myStyles = {
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    <header style={myStyles}>
      <h2>{text}</h2>
      {/* <p style={{color:'red'}}>10</p> */}
    </header>
  )
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
}

export default Header

