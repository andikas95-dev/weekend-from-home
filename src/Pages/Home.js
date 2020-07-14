import React, { Component } from 'react'
import Header from '../Components/Header/Header'
import SectionTop from '../Components/SectionTop/SectionTop'
import SectionMiddle from '../Components/SectionMiddle/SectionMiddle'
import SectionBottom from '../Components/SectionBottom/SectionBottom'
import Footer from '../Components/Footer/Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <SectionTop />
                <SectionMiddle />
                <SectionBottom />
                <Footer />
            </div>
        )
    }
}

export default Home
