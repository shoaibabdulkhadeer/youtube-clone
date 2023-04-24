import { useEffect, useState } from 'react'

import Video from '../components/Video'

const Home = () => {

  const [infos, setInfos] = useState([])
 
  useEffect(() => {
    const fetchData = async () => {
     let response = await fetch('http://localhost:4000/video')
     let data = await response.json()
     setInfos(data)
    }
    fetchData()
  },[])



  const del = (id) => {
    console.log("clicked")
    setInfos(infos.filter((x) => {
      return x.id !== id
    }))
    //  alert("disliked")
  }

  return (
    <div className='Home'>
      <Video infos={infos} del={del}/>

      <Video  infos={infos.filter(x => x.views >= 5)} del={del} />


    </div>
  )
}

export default Home