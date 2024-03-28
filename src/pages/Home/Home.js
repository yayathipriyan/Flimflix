import React from 'react'
import './Home.css'
import Nav from '../../components/Nav/Nav'
import Banner from '../../components/Banner/Banner'
import Row from '../../components/Row/Row'
import requests from '../../helpers/requests'

const Home = () => {
  return (
    <div className='home'>
        <Nav/>

        <Banner/>

        <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge
        />
        <Row
        title="Trending Now"
        fetchURL={requests.fetchNetflixOriginals}
        />
        <Row
        title="Top Rated"
        fetchURL={requests.fetchTopRated}
        />
        <Row
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
        />
        <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        />
        <Row
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        />
        <Row
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
        />
        <Row
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
        />

    </div>
  )
}

export default Home