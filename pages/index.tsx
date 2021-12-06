import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { GetStaticProps} from 'next'

import React, { useState, useEffect } from 'react';

import { Post } from '../lib/types'



const folder: string = 'posts'
export const getStaticProps: GetStaticProps = async () =>  {
  const allPostsData =  await getSortedPostsData(folder)
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData}: any) {

  const [isShow, setIsShow] = React.useState(false);
  const [isServices, setIsServices] = React.useState(false);

  useEffect(() => {
    // Update the document title using the browser API


    
    let y: string = location.href;
   
    if(y.indexOf('#') >-1){
      

      let x: any = document.getElementById("services");
      setIsShow(true);
      setIsServices(true)
     
      x.classList.remove("utils_hidden__ImX6l");
      

    } else{
      setIsServices(false)
     
    }

   
    
  });


     
    const handleClick = (e: any) => {
      e.preventDefault()
      setIsShow(!isShow);
      let x: any = document.getElementById("services");
      x.classList.toggle('utils_hidden__ImX6l')
      
      
      
  
  };

  

  
  return (
    <Layout home>
      {/* Keep the existing code here */}
      
      
      
      <div className= {utilStyles.centred}>
      
      

       {/* Add the services show/hide button when at home level otherwise dispense with it  */}
      {!isServices?(
      <Link href='javascript:void(0)'>

        <a id='showhide'  onClick={(e) => handleClick(e)}>{isShow && !isServices?'masquer services':'services'}</a>
     
      </Link>
  ):(<p/>)}
      </div>
      {/* <h2>en langue anglaise</h2> */}
      {/* Add this <section> tag below the existing <section> tag */}
      <p/>
      <section id='services' className={`${utilStyles.headingMd}  ${utilStyles.hidden}`}>
      
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, index, title }: Post) => (
           <li   key={id}>
           <Link href={`/posts/${id}`}>
             <a ><small>{title}</small></a>
           </Link>
        
           <small className={ `${utilStyles.lightText} ${utilStyles.hidden}`}>
             {index.toString()}
           </small>
         </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}