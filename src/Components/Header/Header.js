import React from 'react'
import imageLego from '../../Assets/image/bitmap.png'
import './Header.scss'

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container header-custom">
                <img src={imageLego} alt="" />
                <div className="titleHeader">
                    <h6>Good Morning</h6>
                    <h5>Fellas</h5>
                </div>
            </div>
        </nav>
    )
}

export default Header
