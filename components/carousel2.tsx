import React from 'react';
import { imageKitLoader, MyImage } from '../components/nextimage'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel(){
    return(
      
           <CarouselProvider
           naturalSlideWidth={400}
           naturalSlideHeight={325}
           totalSlides={7}
         >
            <Slider>
                <Slide index={0}>Prospect.
                    <MyImage width={400} height={325} alt={"Prospect"} src={"/ushant/IMG_2488.JPG"} loader={imageKitLoader({ src: "/ushant/IMG_2488.JPG", width: 400 })} />
                </Slide>
                <Slide index={1}>Jardin d'Hiver.
                    <MyImage width={400} height={325} alt={"Jardin d'hiver"} src={"/ushant/P1160121.JPG"} loader={imageKitLoader({ src: "/ushant/P1160121.JPG", width: 400 })} />
                </Slide>
                <Slide index={2}>Jardin d'hiver dedans.
                    <MyImage width={400} height={325} alt={"Jardin d'hiver dedans"} src={"/ushant/P1190557.JPG"} loader={imageKitLoader({ src: "/ushant/P1190557.JPG", width: 400 })} />
                </Slide>
                <Slide index={3}>Chez vous chez nous.
                    <MyImage width={400} height={325} alt={"Chez vous chez nous"} src={"IMG_9453.jpg"} loader={imageKitLoader({ src: "/IMG_9453.jpg", width: 400 })} />
                </Slide>
                <Slide index={4}>Velux.
                    <MyImage width={400} height={325} alt={"Velux"} src={"/ushant/P1090878.JPG"} loader={imageKitLoader({ src: "/ushant/P1090878.JPG", width: 400 })} />
                </Slide>
                <Slide index={5}>le coucher du soleil.
                    <MyImage width={400} height={325} alt={"Le Coucher du Soleil"} src={"/ushant/view_4.JPG"} loader={imageKitLoader({ src: "/ushant/view_4.JPG", width: 400 })} />
                </Slide>
                
                <Slide index={6}>Vu du toit.
                    <MyImage width={400} height={325} alt={"Vu du toit"} src={"/ushant/DSC_0486.JPG"} loader={imageKitLoader({ src: "/ushant/DSC_0486.JPG", width: 400 })} />
                </Slide>
               
            </Slider>
           <ButtonBack>Back</ButtonBack>
           <ButtonNext>Next</ButtonNext>
         </CarouselProvider>
      
    )
   }