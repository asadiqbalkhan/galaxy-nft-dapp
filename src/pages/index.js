import React from 'react'
import NavBar from '../components/NavBar'
import Landing from '../components/Landing'
import About from '../components/About'
import ComponentDivider from '../components/ComponentDivider'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <NavBar />
            <Landing />
            <ComponentDivider />
            {/* <Landing /> */}
            
            <About />
            <ComponentDivider />
            <About />
            <Footer />
        </>
    )
}

export default Home
