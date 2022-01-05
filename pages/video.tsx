import React from 'react';
import Layout from '../components/layout'

import VideoPlayer from '../components/videoplayer2';


export default function Video(){
 return(
    <Layout home={false}>
      
       <div>
          <VideoPlayer />
       </div>

       <a href="/posts2/prise">← Retournez à Prise en Charge vos clients</a>
    </Layout>
 )
}