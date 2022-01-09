import React from 'react';

import { IKImage } from 'imagekitio-react'

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
             <Slide index={0}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"Le Conquet"} path={"6PF-iS3.jpg"}  />
             </Slide>
             <Slide index={1}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"Plage des Blancs Sablons"} path={"IMG_9489.jpg"}  />
             </Slide>
             <Slide index={2}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"Plage des Blancs Sablons en hiver"} path={"/views/Winter.JPG"}  />
             </Slide>
             <Slide index={3}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"Chez vous chez nous"} path={"/views/DSC_0483.JPG"} />
             </Slide>
            
             <Slide index={4}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"En haut3"} path={"/views/a_044.jpg"}/>
             </Slide>
            
             <Slide index={5}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"En haut5"} path={"/views/a_043.jpg"}  />
             </Slide>
             <Slide index={6}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"The Jetty"} path={"/views/jetty.JPG"}  />
             </Slide>
             <Slide index={7}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"Le Pont"} path={"a_107_BU.jpg"}  />
             </Slide>
             <Slide index={8}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"Coup d'oeil"} path={"DJI_0072.jpg"}  />
             </Slide>
             <Slide index={9}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"Marée basse"} path={"P1270633.jpg"}  />
             </Slide>
             <Slide index={10}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"Le Phare"} path={"DJI_0019.jpg"}  />
             </Slide>
             <Slide index={11}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"Le Pont"} path={"I_0028.jpg"}  />
             </Slide>
             <Slide index={12}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"Avis de tempête"} path={"/views/P1250592.JPG"}  />
             </Slide>
             <Slide index={13}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"la fin d'une bonne journée"} path={"/views/IMG_0266.JPG"}  />
             </Slide>
             <Slide index={14}>
                 <IKImage transformation={[{
                    "height": "325",
                    "width": "400"

                }]} alt={"Fin"} path={"/views/Sunset.jpg"}  />
             </Slide>
         </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
   
 )
}