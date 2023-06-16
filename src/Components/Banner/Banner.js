import './Banner.css'
import { useEffect,useState } from 'react'
import instance from '../../axios'
import requests from '../../requests'


function Banner() {
    const [movie,setMovie]=useState([])
    useEffect(()=>{
        fetchMovie()
    },[])

    const fetchMovie=async()=>{
        const m=await instance.get(requests.fetchNetflixOriginals)
        console.log(m.data.results[1])
        setMovie(m.data.results[1])
    }
    const truncate=(string,n)=>{
        if (string?.length>n){
            return string.slice(0,n-1)+"..."
        }
    }
  return (
    <div className="banner" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,}}>
        <div className='banner_contents'>
            <h1 className='title'>{movie?.name||movie?.original_name}</h1>
            <button className='button'>
                Play
            </button>
            <button className='button'>
                My List
            </button>
            <p className='description'>
                {truncate(movie?.overview,150)}
            </p>
        </div>
        <div className='banner_fade'>
        </div>

    </div>
  )
}

export default Banner