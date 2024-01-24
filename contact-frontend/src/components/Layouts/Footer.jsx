import React from 'react'
import SmileFace from './SmileFace'

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer class=' mb-none mt-60 footer text-content-primary footer-center bg-pink-300 p-5'>
      <div>
        <SmileFace class='text-5xl text-white ' />
        <p class='text-white text-2xl'>teeTech&copy;{footerYear} All copy rights reserved!</p>
      </div>
    </footer>
  )
}

export default Footer