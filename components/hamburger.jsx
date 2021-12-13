import hamburgerstyles from './hamburger.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Mailto from './mailto'
import Tooltip from './tooltip'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


export const Hamburger = () =>{

    
  
  const handleClick = (e) => {
    e.preventDefault()
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    const handleMenu = (e) =>{
      let y = document.getElementById("myLinks");
      if (y.style.display === "block") {
          y.style.display = "none";
      } else {
          y.style.display = "block";
      }
    }

    

    


};
    return (
       
<div>
<MobileView>
<div className={hamburgerstyles.topnav} >
  <Link href="/">
  <a className={hamburgerstyles.active}>accueil</a>
  </Link>
 
  <div id="myLinks" className={hamburgerstyles.hidden}>
  <Link href="/profile">
  
    <a>Profil</a>
    
    </Link>     
  <Link href="/posts/accompagnateur" >
    <a onClick={() =>handleMenu()}>Accompagnateur de projets professionnels</a>
    </Link>
    <Link href="/posts/misenforme" >
    <a onClick={() =>handleMenu()}>Mise en forme et correction de publications</a>
    </Link>
    <Link href="/posts/accueildesclients" >
    <a onClick={(e) =>handleMenu()}>Accompagnement des Collaborateurs et Clients</a>
    </Link>
    <Link href="/posts/cours" >
    <a onClick={(e) => handleMenu(e)}>Cours d’anglais en distanciel ou en présentiel</a>
    </Link>
    <Link href="/posts/workingholiday" >
    <a onClick={(e) =>handleMenu(e)}>Working Holiday au Conquet</a>
    </Link>
    <Link href="javascript:void(0);" >
    <Mailto email="someone@somewhere.com" subject="Salut" body="Tapez%20%0Avotre%20message%20ici%0A">Contact</Mailto>
    </Link>
   
    <Link href="/posts/tarifs" >
    <a onClick={(e) => handleMenu(e)}>Tarifs</a>
   
    </Link>
   
  </div>
            <Link href="javascript:void(0);">
                <a name="hamburger_icon" className={hamburgerstyles.icon} onClick={(e) => handleClick(e)} >
                    <i id="hamburger" className="fa fa-bars" alt="hamburger icon"></i>
                </a>
            </Link>
</div>
</MobileView>
<BrowserView>
<div className={hamburgerstyles.topnav} >
  <Link href="/">
  <a className={hamburgerstyles.active}>accueil</a>
  </Link>
 
  <div id="myLinks" className={hamburgerstyles.hidden}>
  <Link href="/profile">
  
    <a>Profil</a>
    
    </Link>     
  <Link href="/posts/accompagnateur" >
    <a onClick={() =>handleMenu()}>Projets </a>
    </Link>
    <Link href="/posts/misenforme" >
    <a onClick={() =>handleMenu()}>Corrections</a>
    </Link>
    <Link href="/posts/accueildesclients" >
    <a onClick={(e) =>handleMenu()}>Accompagnement clients / collaborateurs</a>
    </Link>
    <Link href="/posts/cours" >
    <a onClick={(e) => handleMenu(e)}>Cours d’anglais</a>
    </Link>
    <Link href="/posts/workingholiday" >
    <a onClick={(e) =>handleMenu(e)}><Tooltip content="Working Holiday au Conquet">Working Holiday</Tooltip></a>
    </Link>
    <Link href="javascript:void(0);" >
    <Mailto email="someone@somewhere.com" subject="Salut" body="Tapez%20%0Avotre%20message%20ici%0A">Contact</Mailto>
    </Link>
   
    <Link href="/posts/tarifs" >
    <a onClick={(e) => handleMenu(e)}>Tarifs</a>
   
    </Link>
   
  </div>
            <Link href="javascript:void(0);">
                <a name="hamburger_icon" className={hamburgerstyles.icon} onClick={(e) => handleClick(e)} >
                    <i id="hamburger" className="fa fa-bars" alt="hamburger icon"></i>
                </a>
            </Link>
</div>
</BrowserView>
</div>

    )

}