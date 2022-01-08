
import React from 'react';
import Layout from '../components/layout'
import Carousel from '../components/carousel'



export default function Gallery(){
 return(
    <Layout home={false}>
       <Carousel />
        <a href="/posts/workingholiday">← Retour à Working Holiday</a>
    </Layout>
 )
}