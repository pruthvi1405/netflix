import React from 'react'

const Posters = ({path,alt}) => {
    const source="http://image.tmdb.org/t/p/w500"+path
  return (

    <div className='px-1 w-40 hover:w-60 h-80'>
        <img src={source} alt={alt}/>
    </div>
  )
}

export default Posters