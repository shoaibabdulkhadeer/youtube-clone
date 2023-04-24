import React from 'react'
import '../styles/sidebar.css'


const sidebar = () => {

  let links = [
    { image: "/images/home.png", link: "Home" },
    { image: "/images/short-film.png", link: "Shorts" },
    { image: "/images/subscribe.png", link: "Subscriptions" },
    { image: "/images/library.png", link: "Library" },
    { image: "/images/history.png", link: "History" },
    { image: "/images/youtube.png", link: "Your videos" },
    { image: "/images/clock.png", link: "Watch Later" },
    { image: "/images/like.png", link: "Liked Videos" },
    { image: "/images/trending.png", link: "Trending" },
    { image: "/images/music.png", link: "Music" }
  ]


  return (
    <div className='sidebar'>
      <div className='sidebarlinks'>
        <ul>
          {links.map(link => (
            <li><a href="/"><img src={link.image} alt="" width={20} /> {link.link} </a></li>
          ))}


        </ul>

      </div>

    </div>
  )
}

export default sidebar