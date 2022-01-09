import React from 'react';

import { IKImage } from 'imagekitio-react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel(){
    return(
      
           <CarouselProvider
           naturalSlideWidth={400}
           naturalSlideHeight={325}
           totalSlides={9}
         >
            <Slider>
                <Slide index={0}>
                    <IKImage transformation={[{
                        "height": "325",
                        "width": "400"

                    }]} alt={"Prospect"} path={"/ushant/IMG_2488.JPG"} />
                </Slide>
                <Slide index={1}>
                    <IKImage transformation={[{
                        "height": "325",
                        "width": "400"

                    }]} alt={"Jardin d'hiver"} path={"/ushant/P1160121.JPG"} />
                </Slide>
                <Slide index={2}>
                    <IKImage transformation={[{
                        "height": "325",
                        "width": "400"

                    }]} alt={"Jardin d'hiver interieur"} path={"/ushant/P1190557.JPG"} />
                </Slide>
                <Slide index={3}>
                    <IKImage transformation={[{
                        "height": "325",
                        "width": "400"

                    }]} alt={"Chez vous chez nous"} path={"IMG_9453.jpg"} />
                </Slide>
                <Slide index={4}>
                    <IKImage transformation={[{
                        "height": "325",
                        "width": "400"

                    }]} alt={"Velux"} path={"/ushant/P1090878.JPG"} />
                </Slide>
                <Slide index={5}>
                    <IKImage transformation={[{
                        "height": "325",
                        "width": "400"

                    }]} alt={"Coaching area"} path={"/ushant/Coaching_area_5iMLx4yg9.JPG"} />
                </Slide>
                <Slide index={6}>
                    <IKImage transformation={[{
                        "height": "325",
                        "width": "400"

                    }]} alt={"Vu du toit"} path={"/ushant/DSC_0486.JPG"} />
                </Slide>

                <Slide index={7}>
                    <IKImage transformation={[{
                        "height": "325",
                        "width": "400"

                    }]} alt={"Bedroom view"} path={"/ushant/Bedroom_view.JPG"} />
                </Slide>
                <Slide index={8}>
                    <IKImage transformation={[{
                        "height": "325",
                        "width": "400"

                    }]} alt={"Port view"} path={"/ushant/PICT0002.JPG"} />
                </Slide>


            </Slider>
           <ButtonBack>Back</ButtonBack>
           <ButtonNext>Next</ButtonNext>
         </CarouselProvider>
      
    )
   }