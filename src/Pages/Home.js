import React from 'react'
import Popular from '../Components/Popular'
import TopRated from '../Components/TopRated'


const Home = () => {
    return(
    <div className='bg-black'>
            <Popular/>
            <TopRated/>
        </div>
    )
}

export default Home