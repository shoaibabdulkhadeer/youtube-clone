import React from 'react'
import '../styles/Home.css'


const Video = ({ infos, del }) => {

  return (

    <div>
    
      <div className='HomeV'>

        {infos.map((x) => {
          return (

            <div className='details'>
              <img src={x.img} alt="" height="240" width="360" />
              <p className='des'>{x.description}</p>

              <div className='chanNdislike'>
                <p className='channelName'>{x.channelname}</p>
                <button className='but' onClick={() => del(x.id)}>DISLIKE</button>
              </div>

              <div className='uploadTime'>
                <p>{x.views}M views </p>
                <p> * </p>
                <p>{x.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Video