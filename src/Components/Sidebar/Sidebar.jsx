import React from 'react'
import MailLine from 'remixicon-react/MailLineIcon'
import GitHubLine from 'remixicon-react/GithubLineIcon'
import TwitterLine from 'remixicon-react/TwitterLineIcon'
import LinkdinFill from 'remixicon-react/LinkedinFillIcon'
import Brackets from 'remixicon-react/BracketsFillIcon'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div class="links">
        <a href="mailto:devanshibilthare@gmail.com"><MailLine /><div className='line'></div></a>
        <a href="https://github.com/Devanshi-Bilthare"><GitHubLine /><div class="line"></div></a>
        <a href="https://twitter.com/Devanshihihi"><TwitterLine/><div class="line"></div></a>
        <a href="https://www.linkedin.com/in/devanshi-bilthare-773900227/"><LinkdinFill/><div class="line"></div></a>
        <a href="https://leetcode.com/Devanshi_Bilthare/"><Brackets/><div class="line"></div></a>
    </div>
  )
}

export default Sidebar