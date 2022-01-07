import React from 'react';
import Layout from '../components/layout'

import VideoPlayer from '../components/videoplayer';


export default function Conquet(){
 return(
    <Layout home={false}>
    
       <div>
          <VideoPlayer />
       </div>

       <a href="/posts/workingholiday">← Retour à Working Holiday</a>
    </Layout>
 )
}