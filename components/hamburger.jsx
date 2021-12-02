import hamburgerstyles from './hamburger.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

export const Hamburger = () =>{

    
  
  const handleClick = (e) => {
    e.preventDefault()
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    const handleMenu = (e) =>{
        let links = document.getElementById("myLinks");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }

    }

    


};
    return (
       

<div className={hamburgerstyles.topnav} >
  <Link href="/">
  <a className={hamburgerstyles.active}>accueil</a>
  </Link>
 
  <div id="myLinks" className={hamburgerstyles.hidden}>
        
  <Link href="/posts/accompagnateur" >
    <a onClick={(e) => handleMenu(e)}>Projets </a>
    </Link>
    <Link href="/posts/misenforme" >
    <a onClick={(e) => handleMenu(e)}>Publication </a>
    </Link>
    <Link href="/posts/accueildesclients" >
    <a onClick={(e) => handleMenu(e)}>Accueil clients</a>
    </Link>
    <Link href="/posts/cours" >
    <a onClick={(e) => handleMenu(e)}>Cours d’anglais</a>
    </Link>
    <Link href="/posts/workingholiday" >
    <a onClick={(e) => handleMenu(e)}>Working Holiday</a>
    </Link>
    <Link href="/profile">
    <a>A propos de moi </a>
    </Link>
  </div>
            <Link href="javascript:void(0);">
                <a  className={hamburgerstyles.icon} onClick={(e) => handleClick(e)} >
                    <i className="fa fa-bars" alt="hamburger icon"></i>
                </a>
            </Link>
</div>



    )

}