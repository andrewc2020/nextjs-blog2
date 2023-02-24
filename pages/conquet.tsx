import React from 'react';
import Layout from '@/components/layout'
import getConfig from 'next/config'
import VideoPlayer from '@/components/videoplayer';
import Link from 'next/link';


export default function Conquet(){
   const { publicRuntimeConfig } = getConfig();
   let source = `${publicRuntimeConfig.image_key}/video/different_sound_track_drones_final_converted_QqzAlEcbT.mp4` 
 return(
    <Layout home={false}>
    
       <div>
          <VideoPlayer endpoint={source}  />
       </div>

       <Link href="/posts/workingholiday">← Retour à Working Holiday</Link>
    </Layout>
 )
}