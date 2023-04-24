import React from 'react'
import '../styles/Pagenotfound.css'
import Logo from '../images/youtube_logo_icon_167938.png'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
    return (
        <div className='Pagenotfound'>

            <img src="/images/monkey.jpg" alt="" width={250} />
            <p>This page isn't available. Sorry about that.
               <br /> Try searching for something else.</p>
                 <img src={Logo} alt="/"  width={150}/>
              <Link to='/'>  <button >Go Back to Home</button>  </Link> 

        </div>
    )
}

export default Pagenotfound