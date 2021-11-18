import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

import React, { useState, useEffect } from 'react';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {

  useEffect(() => {
    // Update the document title using the browser API


    
    let y = location.href;
   
    if(y.indexOf('#') >-1){
      

      var x = document.getElementById("services");
    
      
      x.classList.remove("utils_hidden__ImX6l");

    }
   
    
  });


     
    const handleClick = (e) => {
      e.preventDefault()
      var x = document.getElementById("services");
      x.classList.toggle('utils_hidden__ImX6l')
      
  
  
  };

  

  
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <Link href='javascript:void(0)'>
      
      <h2 className={utilStyles.headingLg}><a onClick={(e) => handleClick(e)}>Facilitateur et Consultant en langue anglaise</a></h2> 
     
      </Link>
      {/* <h2>en langue anglaise</h2> */}
      {/* Add this <section> tag below the existing <section> tag */}
      <section id='services' className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.hidden}`}>
      
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, index, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>
             <a>{title}</a>
           </Link>
           <br />
           <small className={ `${utilStyles.lightText} ${utilStyles.hidden}`}>
             {index}
           </small>
         </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}