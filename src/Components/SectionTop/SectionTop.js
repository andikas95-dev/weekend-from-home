import React from 'react'
import './SectionTop.scss'
import fullLego from '../../Assets/image/bitmap_1.png'
import fullLego2 from '../../Assets/image/bitmap@2x_1.png'
import fullLego3 from '../../Assets/image/bitmap@3x_1.png'

const SectionTop = () => {
    return (
        <div className="bodySectionTop">
            <div className="bgImage">
                <div className="container">
                    <h1 className="titleWeekend">WEEKEND FROM HOME</h1>
                    <h6 className="motoWeekend">
                        Stay active with a little workout.
                    </h6>
                    <div className="letsGo">
                        <img
                            src={fullLego}
                            srcSet={`${fullLego2} 300w, ${fullLego3} 1000w`}
                            alt="Lego-Body"
                        />
                        <button className="btn">Let's Go</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTop
