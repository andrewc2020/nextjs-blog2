import React from 'react';
import { imageKitLoader, MyImage } from '../components/nextimage'

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
                    <MyImage width={400} height={325} alt={"Prospect"} src={"/ushant/IMG_2488.JPG"} loader={imageKitLoader({ src: "/ushant/IMG_2488.JPG", width: 400 })} />
                </Slide>
                <Slide index={1}>
                    <MyImage width={400} height={325} alt={"Jardin d'hiver"} src={"/ushant/P1160121.JPG"} loader={imageKitLoader({ src: "/ushant/P1160121.JPG", width: 400 })} />
                </Slide>
                <Slide index={2}>
                    <MyImage width={400} height={325} alt={"Jardin d'hiver interieur"} src={"/ushant/P1190557.JPG"} loader={imageKitLoader({ src: "/ushant/P1190557.JPG", width: 400 })} />
                </Slide>
                <Slide index={3}>
                    <MyImage width={400} height={325} alt={"Chez vous chez nous"} src={"IMG_9453.jpg"} loader={imageKitLoader({ src: "/IMG_9453.jpg", width: 400 })} />
                </Slide>
                <Slide index={4}>
                    <MyImage width={400} height={325} alt={"Velux"} src={"/ushant/P1090878.JPG"} loader={imageKitLoader({ src: "/ushant/P1090878.JPG", width: 400 })} />
                </Slide>
                <Slide index={5}>
                    <MyImage width={400} height={325} alt={"Coaching area"} src={"/ushant/Coaching_area_5iMLx4yg9.JPG"} loader={imageKitLoader({ src: "/ushant/Coaching_area_5iMLx4yg9.JPG", width: 400 })} />
                </Slide>
                <Slide index={6}>
                    <MyImage width={400} height={325} alt={"Vu du toit"} src={"/ushant/DSC_0486.JPG"} loader={imageKitLoader({ src: "/ushant/DSC_0486.JPG", width: 400 })} />
                </Slide>
                
                <Slide index={7}>
                    <MyImage width={400} height={325} alt={"Bedroom view"} src={"/ushant/Bedroom_view.JPG"} loader={imageKitLoader({ src: "/ushant/Bedroom_view.JPG", width: 400 })} />
                </Slide>
                <Slide index={8}>
                    <MyImage width={400} height={325} alt={"Port view"} src={"/ushant/DSC_0486.JPG"} loader={imageKitLoader({ src: "/ushant/DSC_0486.JPG", width: 400 })} />
                </Slide>
               
               
            </Slider>
           <ButtonBack>Back</ButtonBack>
           <ButtonNext>Next</ButtonNext>
         </CarouselProvider>
      
    )
   }