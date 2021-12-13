import React from 'react';
import Layout from '../components/layout'
import Carousel from '../components/carousel2'


export default function Ushant(){
 return(
    <Layout home={false}>
       <Carousel />
       <a href="/posts/workingholiday">← Retournez à Working Holiday</a>
    </Layout>
 )
}