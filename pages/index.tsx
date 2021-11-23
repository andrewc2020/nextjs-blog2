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

  const [isShow, setIsShow] = React.useState(false);
  const [isServices, setIsServices] = React.useState(false);

  useEffect(() => {
    // Update the document title using the browser API


    
    let y = location.href;
   
    if(y.indexOf('#') >-1){
      

      var x = document.getElementById("services");
      setIsShow(true);
      setIsServices(true)
     
      x.classList.remove("utils_hidden__ImX6l");
      

    } else{
      setIsServices(false)
     
    }

   
    
  });


     
    const handleClick = (e) => {
      e.preventDefault()
      setIsShow(!isShow);
      var x = document.getElementById("services");
      x.classList.toggle('utils_hidden__ImX6l')
      
      
      
  
  };

  

  
  return (
    <Layout home>
      {/* Keep the existing code here */}
      
      
      
      <div className= {utilStyles.centred}>
      <small>Facilitateur et Consultant en</small>
      <h2 className={utilStyles.headingMd}>Anglais</h2> 
      

       {/* Add the services show/hide button when at home level otherwise dispense with it  */}
      {!isServices?(
      <Link href='javascript:void(0)'>

        <a id='showhide' className={utilStyles.padding1px} onClick={(e) => handleClick(e)}>{isShow && !isServices?'masquer services':'services'}</a>
     
      </Link>
  ):(<p/>)}
      </div>
      {/* <h2>en langue anglaise</h2> */}
      {/* Add this <section> tag below the existing <section> tag */}
      <p/>
      <section id='services' className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.hidden}`}>
      
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, index, title }) => (
           <li   key={id}>
           <Link href={`/posts/${id}`}>
             <a ><small>{title}.</small></a>
           </Link>
        
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