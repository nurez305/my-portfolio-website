import React from 'react'
import CV from "../../assets/Nurudeen_saliu_resume.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target="_blank" rel="noreferrer" className='btn'>View CV</a>
        <a href="https://nurez-blog.vercel.app/" className='btn btn-primary'>Visit My Blog</a>
    </div>
  )
}

export default CTA
