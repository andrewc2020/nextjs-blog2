import React from 'react';
import Layout from '../components/layout'
import getConfig from 'next/config'
import VideoPlayerParam from '../components/videoplayerparam';


export default function Conquet(){
   const { publicRuntimeConfig } = getConfig();
   let endpoint = `${publicRuntimeConfig.image_key}/video/different_sound_track_drones_final_converted_QqzAlEcbT.mp4` 
 return(
    <Layout home={false}>
    
       <div>
          <VideoPlayerParam endpoint={endpoint}  />
       </div>

       <a href="/posts/workingholiday">← Retour à Working Holiday</a>
    </Layout>
 )
}