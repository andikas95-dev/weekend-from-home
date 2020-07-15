import React from 'react'
import './SectionMiddle.scss'
import legoRight from '../../Assets/image/group-4.png'
import legoRight2 from '../../Assets/image/group-4@2x.png'
import legoRight3 from '../../Assets/image/group-4@3x.png'

const SectionMiddle = () => {
    return (
        <div className="bodySectionMiddle">
            <div className="justify-content-end lego-mobile">
                <img
                    src={legoRight}
                    srcSet={`${legoRight2} 300w, ${legoRight3} 1000w`}
                    alt="lego-right"
                    className="lego-right-mobile"
                />
            </div>
            <img
                src={legoRight}
                srcSet={`${legoRight2} 300w, ${legoRight3} 1000w`}
                alt="lego-right"
                className="lego-right"
            />
            <div className="container">
                <div className="circleBlue"></div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-xl-8 align-self-center py-auto">
                        <p className="defText">
                            <span>Deffinition</span> a practice or exercise to
                            test or improve one's fitness for athletic
                            competition, ability, or performance to exhaust
                            (something, such as a mine) by working to devise,
                            arrange, or achieve by resolving difficulties.
                            Merriam-Webster.com Dictionary.
                        </p>
                        <p className="weekendTeam">-weekend team</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionMiddle
