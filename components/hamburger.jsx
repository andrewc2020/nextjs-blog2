import hamburgerstyles from './hamburger.module.css'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react';
import Mailto from './mailto'
import Tooltip from './tooltip'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


export const Hamburger = () =>{

    const links = useRef(null)
  
  const handleClick = (e) => {
    e.preventDefault()
   
    let x = links.current
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    const handleMenu = (e) =>{
     
      let y = links.current
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
  <Link href="/"  className={hamburgerstyles.active}>accueil
  
  </Link>
 
  <div id="myLinks" className={hamburgerstyles.hidden} ref={links}>
  <Link href="/profile">Mon profil (réalisations et compétences)
  
   
    
    </Link>     
  <Link href="/posts/accompagnateur" onClick={() =>handleMenu(e)}><h3 className='smalltype'>
    Accompagnateur de projets professionnels</h3>
    </Link>
    <Link href="/posts/misenforme" onClick={() =>handleMenu(e)}>
    <h3 className='smalltype' >Relecture et correction de documents pour optimisation avant publication</h3>
    </Link>
    <Link href="/posts/accueildesclients" onClick={(e) =>handleMenu(e)}>
    <h3 className='smalltype'>Accompagnement des Collaborateurs et Clients</h3>
    </Link>
    <Link href="/posts/cours" onClick={(e) => handleMenu(e)}>
    <h3 className='smalltype'>Cours d’anglais en distanciel ou en présentiel</h3>
    </Link>
    <Link href="/posts/workingholiday" onClick={(e) =>handleMenu(e)}>
    <h3 className='smalltype'>Working Holiday au Conquet</h3>
    </Link>
    <Link href="/contact" onClick={(e) =>handleMenu(e)} >
   
    Contact
    </Link>
   
    <Link href="/posts/tarifs" onClick={(e) => handleMenu(e)}>
    Tarifs
   
    </Link>
   
  </div>
            <Link href="#" name="hamburger_icon" className={hamburgerstyles.icon} onClick={(e) => handleClick(e)}>
               
                    <i id="hamburger" className="fa fa-bars" alt="hamburger icon"></i>
               
            </Link>
</div>
</MobileView>
<BrowserView>
<div className={hamburgerstyles.topnav} >
  <Link href="/" className={hamburgerstyles.active}>
  accueil
  </Link>
 
  <div id="myLinks" className={hamburgerstyles.hidden} ref={links}>
  <Link href="/profile">
  
    <Tooltip content="Mon profil (réalisations et compétences)">Profil</Tooltip>
   
    
    </Link>     
  <Link href="/posts/accompagnateur"  onClick={() =>handleMenu()} >
    <Tooltip content="Accompagnateur de projets professionnels">Projets</Tooltip>
    </Link>
    <Link href="/posts/misenforme" onClick={() =>handleMenu()} >
    <Tooltip content="Relecture et correction de documents pour optimisation avant publication">Corrections</Tooltip>
    </Link>
    <Link href="/posts/accueildesclients" onClick={(e) =>handleMenu()}>
    <Tooltip content="Accompagnement des Collaborateurs et Clients">Accompagnement clients / collaborateurs</Tooltip>
    </Link>
    <Link href="/posts/cours" >
    <Tooltip content="Cours d’anglais en distanciel ou en présentiel">Cours d’anglais</Tooltip>
    </Link>
    <Link href="/posts/workingholiday" onClick={(e) => handleMenu(e)} >
    <Tooltip content="Working Holiday au Conquet">Working Holiday</Tooltip>
    </Link>
    <Link href="/contact" >
  
    Contact
    </Link>
   
    <Link href="/posts/tarifs" onClick={(e) => handleMenu(e)}>
   Tarifs
   
    </Link>
   
  </div>
            <Link href="#" name="hamburger_icon" className={hamburgerstyles.icon} onClick={(e) => handleClick(e)}>
                
                    <i id="hamburger" name="hamburger" className="fa fa-bars" alt="hamburger icon"></i>
                
            </Link>
</div>
</BrowserView>
</div>

    )

}