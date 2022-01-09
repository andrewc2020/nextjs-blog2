import React from 'react';

import { IKImage } from 'imagekitio-react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel() {
    return (

        <CarouselProvider
            naturalSlideWidth={400}
            naturalSlideHeight={325}
            totalSlides={2}
        >
            <Slider>
                <Slide index={0}>Visiting the uninhabited islands.
                    <IKImage transformation={[{
                        "height": "325",
                        "width": "400"

                    }]} alt={"visiting the uninhabited islans"} path={"/views/visiting_the_uninhabited_islands.JPG"} />
                </Slide>
                <Slide index={1}>Do not dusturb.
                    <IKImage transformation={[{
                        "height": "325",
                        "width": "400"

                    }]} alt={"Do not disturb"} path={"/views/Do_not_disturb.jpg"} />
                </Slide>


            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>

    )
}