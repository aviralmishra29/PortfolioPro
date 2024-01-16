import React from 'react'
import footerBackground from '../assets/footerBackground.jpg'

function Footer() {
  return (
    <div className='h-72 bg-no-repeat bg-cover bg-center bg-fixed' style={{ backgroundImage: `url(${footerBackground})` }}>Footer</div>
  )
}

export default Footer