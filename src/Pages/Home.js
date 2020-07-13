import React, { Component } from 'react'
import Header from '../Components/Header/Header'
import SectionTop from '../Components/SectionTop/SectionTop'
import SectionMiddle from '../Components/SectionMiddle/SectionMiddle'
import SectionBottom from '../Components/SectionBottom/SectionBottom'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <SectionTop />
                <SectionMiddle />
                <SectionBottom />
            </div>
        )
    }
}

export default Home
