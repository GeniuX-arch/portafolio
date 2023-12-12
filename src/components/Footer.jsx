import React from 'react'
import github from '../assets/github.svg'

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-slate-200 text-center flex flex-col justify-center items-center p-5'>
      <div>
        <a href="https://github.com/GeniuX-arch" target='_blank' >
          <img src={github} alt="" width={50}/>
        </a>
      </div>
      <div>
        <p>GeniuX</p>
      </div>
    </footer>
  )
}
