import React from 'react'
import imageLego from '../../Assets/image/bitmap.png'
import imageLego2 from '../../Assets/image/bitmap@2x.png'
import imageLego3 from '../../Assets/image/bitmap@3x.png'
import './Header.scss'

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container header-custom">
                <img
                    src={imageLego}
                    srcSet={`${imageLego2} 300w, ${imageLego3} 1000w`}
                    alt="Head-Lego"
                />
                <div className="titleHeader">
                    <h6>Good Morning</h6>
                    <h5>Fellas</h5>
                </div>
            </div>
        </nav>
    )
}

export default Header
