import React from 'react';
import { imageKitLoader, MyImage } from '../components/nextimage'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel(){
 return(
   
        <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={325}
        totalSlides={15}
      >
         <Slider>
             <Slide index={0}>Le Conquet.
                 <MyImage width={400} height={325} alt={"Le Conquet"} src={"6PF-iS3.jpg"} loader={imageKitLoader({ src: "/6PF-iS3.jpg", width: 400 })} />
             </Slide>
             <Slide index={1}>Plage des Blancs Sablons.
                 <MyImage width={400} height={325} alt={"Plage des Blancs Sablons"} src={"IMG_9489.jpg"} loader={imageKitLoader({ src: "/IMG_9489.jpg", width: 400 })} />
             </Slide>
             <Slide index={2}>Les petits bateaux.
                 <MyImage width={400} height={325} alt={"Chez vous chez nous"} src={"/views/DSC_0483.JPG"} loader={imageKitLoader({ src: "/views/DSC_0483.JPG", width: 400 })} />
             </Slide>
             <Slide index={3}>En Haut.
                 <MyImage width={400} height={325} alt={"En haut"} src={"047_9A.jpg"} loader={imageKitLoader({ src: "/047_9A.jpg", width: 400 })} />
             </Slide>
             <Slide index={4}>En Haut 2.
                 <MyImage width={400} height={325} alt={"En Haut 2"} src={"/views/a_045_86sq9YJrn.jpg"} loader={imageKitLoader({ src: "/views/a_045_86sq9YJrn.jpg", width: 400 })} />
             </Slide>
             <Slide index={5}>En Haut 3.
                 <MyImage width={400} height={325} alt={"En haut3"} src={"/views/a_044.jpg"} loader={imageKitLoader({ src: "/views/a_044.jpg", width: 400 })} />
             </Slide>
             <Slide index={6}>En Haut 4.
                 <MyImage width={400} height={325} alt={"En haut4"} src={"/views/plane2015_June19.JPG"} loader={imageKitLoader({ src: "/views/plane2015_June19.JPG", width: 400 })} />
             </Slide>
             <Slide index={7}>En Haut 5.
                 <MyImage width={400} height={325} alt={"En haut5"} src={"/views/a_043.jpg"} loader={imageKitLoader({ src: "/views/a_043.jpg", width: 400 })} />
             </Slide>
             <Slide index={8}>Le Port.
                 <MyImage width={400} height={325} alt={"Le Pont"} src={"a_107_BU.jpg"} loader={imageKitLoader({ src: "a_107_BU.jpg", width: 400 })} />
             </Slide>
             <Slide index={9}>Coup d'oeil.
                 <MyImage width={400} height={325} alt={"Coup d'oeil"} src={"DJI_0072.jpg"} loader={imageKitLoader({ src: "/DJI_0072.jpg", width: 400 })} />
             </Slide>
             <Slide index={10}>Marée basse.
                 <MyImage width={400} height={325} alt={"Marée basse"} src={"P1270633.jpg"} loader={imageKitLoader({ src: "/P1270633.jpg", width: 400 })} />
             </Slide>
             <Slide index={11}>Le Phare.
                 <MyImage width={400} height={325} alt={"Le Phare"} src={"DJI_0019.jpg"} loader={imageKitLoader({ src: "/DJI_0019.jpg", width: 400 })} />
             </Slide>
             <Slide index={12}>Le Pont.
                 <MyImage width={400} height={325} alt={"Le Pont"} src={"I_0028.jpg"} loader={imageKitLoader({ src: "/I_0028.jpg", width: 400 })} />
             </Slide>
             <Slide index={13}>Avis de tempête.
                 <MyImage width={400} height={325} alt={"Avis de tempête"} src={"/views/P1250592.JPG"} loader={imageKitLoader({ src: "/views/P1250592.JPG", width: 400 })} />
             </Slide>
             <Slide index={14}>la fin d'une autre bonne journée.
                 <MyImage width={400} height={325} alt={"la fin d'une autre bonne journée"} src={"/views/IMG_0266.JPG"} loader={imageKitLoader({ src: "/views/IMG_0266.JPG", width: 400 })} />
             </Slide>
         </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
   
 )
}