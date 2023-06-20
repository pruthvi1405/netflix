import './Row.css'
import instance from '../../axios'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'


function Row({title,url,isLarge=false}) {

    const [movies,setMovies]=useState([])

    const getMovies=async()=>{
       const results=await instance.get(url)
       setMovies(results.data.results)
       return results
    }

    useEffect(() => {
      getMovies()
    }, [url])
    

   const renderItems=movies.map((movie)=>{
       if((isLarge && movie.poster_path)||(!isLarge && movie.backdrop_path)){
       return <Card cl={`${isLarge?"large":""}`} key={movie.id} imagepath={isLarge?movie.poster_path:movie.backdrop_path} ></Card>
       }
   })

  return (
    <div className='each_row'>
        <h2>{title}</h2>
        <div className='row'>
        {renderItems}
        </div>
        
    </div>
  )
}

export default Row