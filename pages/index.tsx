import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
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

    console.log(location.href);
    
    let y = location.href;
    console.log(y.indexOf('#'));
    if(y.indexOf('#') >-1){
      

      var x = document.getElementById("services");
    
      
      x.classList.remove("utils_hidden__ImX6l");

    }
   
    
  });


     
    const handleClick = (e) => {
      e.preventDefault()
      var x = document.getElementById("services");
      if (x.style.display === "block" ) {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
  
      
  
  
  };

  

  
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <Link href='javascript:void(0)'>
      
      <h2 className={utilStyles.headingLg}><a onClick={(e) => handleClick(e)}>Facilitateur</a> et Consultant en langue anglaise</h2>
     
      </Link>

      {/* Add this <section> tag below the existing <section> tag */}
      <section id='services' className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.hidden}`}>
      
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>
             <a>{title}</a>
           </Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
         </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}