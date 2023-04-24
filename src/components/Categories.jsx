import React from 'react'
import '../styles/categories.css'

const categories = () => {

   let links = [
      { link: "Music" },
      { link: "football" },
      { link: "Netflix" },
      { link: "sports" },
      { link: "movies" },
      { link: "news" },
      { link: "spotify" },
      { link: "t-series" },
      { link: "Valorant" },
      { link: "comedy" },
      { link: "Amazon" },
      { link: "gaming" },
      { link: "Csgo" },
      { link: "hockey" },
      { link: "hollywood" }
   ]


   return (
      <>
         <div className='categories'>
            <ul>
               {links.map(x => (
                  <li> <a href="/">{x.link} </a></li>
               ))}
            </ul>
         </div>
      </>
   )
}

export default categories