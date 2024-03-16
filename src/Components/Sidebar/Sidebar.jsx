import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div class="links">
        <Link to="mailto:devanshibilthare@gmail.com"><i class="ri-mail-line"></i><div className='line'></div></Link>
        <Link to="https://github.com/Devanshi-Bilthare"><i class="ri-github-line"></i><div class="line"></div></Link>
        <Link to="https://twitter.com/Devanshihihi"><i class="ri-twitter-x-fill"></i><div class="line"></div></Link>
        <Link to="https://www.linkedin.com/in/devanshi-bilthare-773900227/"><i class="ri-linkedin-fill"></i><div class="line"></div></Link>
        <Link to="https://leetcode.com/Devanshi_Bilthare/"><i class="ri-code-line"></i><div class="line"></div></Link>
    </div>
  )
}

export default Sidebar