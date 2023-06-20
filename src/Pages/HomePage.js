import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Row from '../Components/Row/Row'
import requests from '../requests'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Row title={'Netflix Originals'} url={requests.fetchNetflixOriginals} isLarge/> 
        <Row title={'Trending'} url={requests.fetchTrending}/>
        <Row title={'Romantic Movies'} url={requests.fetchRomanceMovies}/>
        <Row title={'Comedy'} url={requests.fetchComedyMovies}/>
        <Row title={'Horror'} url={requests.fetchHorrorMovies}/>
        
    </div>
  )
}

export default HomePage