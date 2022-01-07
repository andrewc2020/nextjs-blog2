import React from 'react';
import Layout from '../components/layout'
import Carousel from '../components/carousel3';

import VideoPlayer from '../components/videoplayer2';


export default function Bateau(){
 return(
    <Layout home={false}>
      
       <div>
          <VideoPlayer />
       </div>
       <div id="gallery">
          <Carousel />
       </div>

       <a href="/posts2/prise">← Retour à Prise en Charge vos clients</a>
    </Layout>
 )
}