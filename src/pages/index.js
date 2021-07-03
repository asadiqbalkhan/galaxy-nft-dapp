import React from 'react'
import NavBar from '../components/NavBar'
import Landing from '../components/Landing'
import About from '../components/About'
import ComponentDivider from '../components/ComponentDivider'
import Footer from '../components/Footer'
import Universe from '../components/Universe'
import CreateNFT from '../components/CreateNFT'

const Home = () => {
    return (
        <>
            <NavBar />
            <Landing />
            <ComponentDivider />
            <About />
            <ComponentDivider />
            <CreateNFT/>
            <Universe />
            <Footer />
        </>
    )
}

export default Home
