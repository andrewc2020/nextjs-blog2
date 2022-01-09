import React from 'react';
import Layout from '@/components/layout'
import Carousel from '@/components/carousel3'
import { IKContext } from 'imagekitio-react'
import getConfig from 'next/config'

import VideoPlayer from '../components/videoplayer';



export default function Bateau() {
   const { publicRuntimeConfig } = getConfig();
   let source = `${publicRuntimeConfig.image_key}/video/MBVV8571_converted_ia2BjnyJx.mp4`
   return (
      <Layout home={false}>

         <div>
            <VideoPlayer endpoint={source} />
         </div>
         <div id="gallery">
            <IKContext urlEndpoint={publicRuntimeConfig.image_key} >
               <Carousel />
            </IKContext>
         </div>

         <a href="/posts2/prise">← Retour à Prise en Charge vos clients</a>
      </Layout>
   )
}