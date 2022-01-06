import React from 'react';
import { imageKitLoader, MyImage } from '../components/nextimage'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel(){
    return(
      
           <CarouselProvider
           naturalSlideWidth={400}
           naturalSlideHeight={325}
           totalSlides={2}
         >
            <Slider>
                <Slide index={0}>Visiting the uninhabited islands.
                    <MyImage width={400} height={325} alt={"visiting the uninhabited islans"} src={"/views/visiting_the_uninhabited_islands.JPG"} loader={imageKitLoader({ src: "/views/visiting_the_uninhabited_islands.JPG", width: 400 })} />
                </Slide>
                <Slide index={1}>Do not dusturb.
                    <MyImage width={400} height={325} alt={"Do not disturb"} src={"/views/Do_not_disturb.jpg"} loader={imageKitLoader({ src: "/views/Do_not_disturb.jpg", width: 400 })} />
                </Slide>
              
               
            </Slider>
           <ButtonBack>Back</ButtonBack>
           <ButtonNext>Next</ButtonNext>
         </CarouselProvider>
      
    )
   }