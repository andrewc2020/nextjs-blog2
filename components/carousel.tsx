import React from 'react';
import { imageKitLoader, MyImage } from '../components/nextimage'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel(){
 return(
   
        <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={325}
        totalSlides={3}
      >
         <Slider>
             <Slide index={0}>Le Conquet.
                 <MyImage width={400} height={325} alt={"Le Conquet"} src={"6PF-iS3.jpg"} loader={imageKitLoader({ src: "/6PF-iS3.jpg", width: 400 })} />
             </Slide>
             <Slide index={1}>Les sables.
                 <MyImage width={400} height={325} alt={"Les sables"} src={"IMG_9489.jpg"} loader={imageKitLoader({ src: "/IMG_9489.jpg", width: 400 })} />
             </Slide>
             <Slide index={2}>Chez vous chez nous.
                 <MyImage width={400} height={325} alt={"Chez vous chez nous"} src={"IMG_9453.jpg"} loader={imageKitLoader({ src: "/IMG_9453.jpg", width: 400 })} />
             </Slide>
             <Slide index={3}>En haut.
                 <MyImage width={400} height={325} alt={"En haut"} src={"047_9A.jpg"} loader={imageKitLoader({ src: "/047_9A.jpg", width: 400 })} />
             </Slide>
             <Slide index={4}>Coup d'oeil.
                 <MyImage width={400} height={325} alt={"Coup d'oeil"} src={"DJI_0072.jpg"} loader={imageKitLoader({ src: "/DJI_0072.jpg", width: 400 })} />
             </Slide>
             <Slide index={5}>Le Pont.
                 <MyImage width={400} height={325} alt={"Le Pont"} src={"I_0028.jpg"} loader={imageKitLoader({ src: "/I_0028.jpg", width: 400 })} />
             </Slide>
         </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
   
 )
}