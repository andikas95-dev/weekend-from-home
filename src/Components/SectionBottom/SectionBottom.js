import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import axios from 'axios'
import './SectionBottom.scss'
import 'react-multi-carousel/lib/styles.css'

const SectionBottom = () => {
    const [carouselData, setCarouselData] = useState([])
    const [helpData, setHelpData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const resultCarousel = await axios({
                method: 'get',
                url:
                    'https://wknd-take-home-challenge-api.herokuapp.com/testimonial',
            })

            const resultHelp = await axios({
                method: 'get',
                url:
                    'https://wknd-take-home-challenge-api.herokuapp.com/help-tips',
            })

            setCarouselData(resultCarousel.data)
            setHelpData(resultHelp.data)
        }

        fetchData()
    }, [])

    console.log(carouselData)
    console.log(helpData)
    return (
        <div className="bg-black">
            <div className="container bottom-custom">
                <div className="carousel">
                    <h2 className="testi">Testimonial</h2>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerclassName="container"
                        draggable
                        focusOnSelect={false}
                        infinite={false}
                        itemclassName=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024,
                                },
                                items: 3,
                                partialVisibilityGutter: 40,
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0,
                                },
                                items: 1,
                                partialVisibilityGutter: 30,
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464,
                                },
                                items: 2,
                                partialVisibilityGutter: 30,
                            },
                        }}
                        showDots={false}
                        sliderclassName=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {carouselData &&
                            carouselData.map((item) => {
                                return (
                                    <div
                                        className="card card-body mx-2 h-100"
                                        key={item.id}
                                    >
                                        <h1 className="card-title">
                                            {item.by}
                                        </h1>
                                        <h5>{item.testimony}</h5>
                                    </div>
                                )
                            })}
                    </Carousel>
                </div>
                <div className="pov my-5">
                    <h2 className="testi">POV</h2>
                    <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        ullamco laboris nisi ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </h5>
                </div>
                <div className="pov">
                    <h2 className="testi">Resource</h2>
                    <h5>
                        These cases are perfectly simple and easy to
                        distinguish. In a free hour, when our power of choice is
                        untrammelled and when nothing prevents our being able to
                        do what we like best
                    </h5>
                </div>
                <div className="helpTips">
                    <h2 className="testi">Help & Tips</h2>
                    <div className="row">
                        {helpData &&
                            helpData.map((item) => {
                                return (
                                    <div
                                        className="col-12 col-md-4"
                                        key={item.id}
                                    >
                                        <div className="card text-white">
                                            <img
                                                src={item.image}
                                                className="card-img"
                                                alt="..."
                                            />
                                            <div className="card-img-overlay">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionBottom
