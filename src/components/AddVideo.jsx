import React, { useRef } from 'react'
import '../styles/addvideo.css'
import {useNavigate} from 'react-router-dom'

const AddVideo = () => {
  let img = useRef(null)
  let description = useRef(null)
  let channelname = useRef(null)
  let views = useRef(null)
  let time = useRef(null)

  let navigate = useNavigate()

  let submit = (e) => {
    e.preventDefault()
     let data = {
      img: img.current.value,
      description: description.current.value,
      channelname: channelname.current.value,
      views: views.current.value,
      time: time.current.value
     }
      fetch("http://localhost:4000/video",{
      method:'POST',
      headers:{"Content-Type":'application/json'},
      body:JSON.stringify(data)
  })
    alert('Success');
    navigate("/")
  }

  return (
    <div className='addvideo'>
      
      <div className='formPage'>
     <div>
        <h2 className='title'>Add Video</h2>
          <form action="" onSubmit={submit}>
            <input ref={img} placeholder='img' type="text" required/>
            <input ref={channelname} type="text" placeholder='Name' required/>
            <input ref={description} type="text" placeholder='description' required/>
             <input ref={views} placeholder='views' type="number" required/>
             <input ref={time} placeholder="time" type="text" />
             <button style={{cursor:"pointer",width:"150px",backgroundColor:"red",color:"white",border:"none"}}>Submit</button>
          </form>
     </div>

        <div className='image'>
          <img src="/images/din.jpg" alt="" width={370} height={520} />
        </div>

      </div>


    </div>
  )
}

export default AddVideo;