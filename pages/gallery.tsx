
import React from 'react';
import Layout from '@/components/layout'
import Carousel from '@/components/carousel'
import {IKContext} from 'imagekitio-react'
import getConfig from 'next/config'
import Link from 'next/link';



export default function Gallery(){
   const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

 return(
    <Layout home={false}>
       <IKContext urlEndpoint={publicRuntimeConfig.image_key} >
          <Carousel />
       </IKContext>
         <p><a href="/conquet">video</a></p>
       
        <Link href="/posts/workingholiday">← Retour à Working Holiday</Link>
    </Layout>
 )
}