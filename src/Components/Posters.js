import React from 'react'

const Posters = ({path,alt}) => {
    const source="http://image.tmdb.org/t/p/w500"+path
  return (

    <div>
        <img src={source} alt={alt}/>
    </div>
  )
}

export default Posters