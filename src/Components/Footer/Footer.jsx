import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
       <Link to="mailto:devanshibilthare@gmail.com"><i class="ri-mail-line"></i></Link>
        <Link to="https://github.com/Devanshi-Bilthare"><i class="ri-github-line"></i></Link>
        <Link to="https://twitter.com/Devanshihihi"><i class="ri-twitter-x-fill"></i></Link>
        <Link to="https://www.linkedin.com/in/devanshi-bilthare-773900227/"><i class="ri-linkedin-fill"></i></Link>
        <Link to="https://leetcode.com/Devanshi_Bilthare/"><i class="ri-code-line"></i></Link> 
    </div>
  )
}

export default Footer