import React from 'react'
import "./Portfolio.css"
import IMG1 from '../../assets/airtime.png'
import IMG2 from '../../assets/ecom.png'
import IMG3 from '../../assets/movies.png'
import IMG10 from '../../assets/IMG-10.png'
import IMG4 from '../../assets/youtube.png'
import IMG5 from '../../assets/school.png'
import IMG6 from '../../assets/meal-order.png'
import IMG7 from '../../assets/mini-wallet.png'

const data = [
     {
    id: 1,
    image: IMG7,
    title: 'A Mini Wallet App',
    desc: "A personal finance app for managing accounts, transactions, budgets, and recurring payments. Features responsive design, dark/light themes, and CSV import/export. Built with React, TypeScript, and Tailwind CSS.",
    github: 'https://github.com/nurez305/mini-wallet',
    demo : 'https://nurezminiwallet.netlify.app/'
  },

  {
    id: 2,
    image: IMG2,
    title: 'An  E-commerce App',
    desc: "A responsive e-commerce application built with React, Css module and Paystack for product checkout.",
    github: 'https://github.com/nurez305/al-nur-store',
    demo : 'https://al-nur-store.netlify.app/'
  },
    {
    id: 3,
    image: IMG1,
    title: 'Airtime-to-cash App',
    desc: "The Airtime to Cash app allows users to sell their airtime for cash. It features a wallet, which holds the funds users receive in return for sold airtime and allows for withdrawal of those funds into the user’s designated bank account.",
    github: 'https://github.com/nurez305/Airtime-2-cash-app',
    demo : 'https://airtime-to-cash-frontend-master.vercel.app/'

  },

  {
    id: 4,
    image: IMG6,
    title: 'A Meal order App',
    desc: "A full-stack responsive application for ordering Nigerian foods. The client-side was built with ReactJs, and the server side was built with Nodejs, Express, and MongoDB for the database.",
    github: 'https://github.com/nurez305/Meal-order-app',
    demo : 'https://fastordermeal.netlify.app/'
  },

  {
    id: 5,
    image: IMG10,
    title: 'A Payment UI/UX',
    desc: "Modern UI/UX website using React.js & Tailwind CSS",
    github: 'https://github.com/nurez305/landing-page-ui',
    demo : 'https://bankpay.netlify.app/'
  },
  {
    id: 6,
    image: IMG3,
    title: 'A Movie App',
    desc: "This is a basic Movie Search Application where you can search for any movie of your choice. You pass in a keyword in the search bar and movies related to your keyword will be displayed.",
    github: 'https://github.com/nurez305/learning-react',
    demo : 'https://moviestarapp.netlify.app/'

  },
  {
    id: 7,
    image: IMG4,
    title: 'Youtune Clone App',
    desc: "A fully responsive youtube clone app built with React, Materia-Ui and Rapid-Api.",
    github: 'https://github.com/nurez305/project_youtube_clone-main',
    demo : 'http://nurez-youtube.netlify.app'

  },
  {
    id: 8,
    image: IMG5,
    title: 'Multipage school website',
    desc: "A complete responsive multi-page education/school website built with HTML, CSS, and javascript.",
    github: 'https://github.com/nurez305/Multipage-project',
    demo : 'http://checkitoutnow.netlify.app'

  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {data.map(({id, image, title,desc, github, demo})=>{
          return(
          <article key={id} className='portfolio_item'>
          <div className='portfolio_item-img'> 
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="portfolio_item-cta">
          <a href={github} className='btn' target='_blank '>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank '>Live Demo</a>
          </div>
          
        </article>

          )
        })
        }
        
      </div>
      
    </section>
  )
}

export default Portfolio