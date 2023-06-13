import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Posters from '../Components/Posters'
import { useDispatch,useSelector } from 'react-redux'
import { popular } from '../store/slices/popularSlice'

const Popular = () => {
    const dispatch=useDispatch();
    const result=useSelector((state)=>{
        return state.popular
    })

const fetchPopular=async()=>{
    const result=await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=1a541cec7105af30ec30adf65ec806e9")
     dispatch(popular(result.data.results))
}
useEffect(() => {
  fetchPopular()
}, [])

const renderPosters=result.map((poster)=>{
    return <Posters className="" key={poster.id} alt={poster.original_name} path={poster.poster_path} ></Posters>
})

  return (
      <div>
          <h1 className='text-white mt-6 mb-3 font-bold text-4xl'>Popular</h1>
          <div className='flex overflow-x-auto'>
              <div className='flex flex-row'>
              {renderPosters}
              </div>
          </div>
          
    </div>
  )
}

export default Popular