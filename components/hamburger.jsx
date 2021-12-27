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
  <Link href="/">
  <a className={hamburgerstyles.active}>accueil</a>
  </Link>
 
  <div id="myLinks" className={hamburgerstyles.hidden}>
  <Link href="/profile">
  
    <a>Profil</a>
    
    </Link>     
  <Link href="/posts/accompagnateur" >
    <a onClick={() =>handleMenu()}><h3 className='smalltype' >Accompagnateur de projets professionnels</h3></a>
    </Link>
    <Link href="/posts/misenforme" >
    <a onClick={() =>handleMenu()}><h3 className='smalltype' >Mise en forme et correction de publications</h3></a>
    </Link>
    <Link href="/posts/accueildesclients" >
    <a onClick={(e) =>handleMenu()}><h3 className='smalltype'>Accompagnement des Collaborateurs et Clients</h3></a>
    </Link>
    <Link href="/posts/cours" >
    <a onClick={(e) => handleMenu(e)}><h3 className='smalltype'>Cours d’anglais en distanciel ou en présentiel</h3></a>
    </Link>
    <Link href="/posts/workingholiday" >
    <a onClick={(e) =>handleMenu(e)}><h3 className='smalltype'>Working Holiday au Conquet</h3></a>
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
 
  <div id="myLinks" className={hamburgerstyles.hidden} ref={links}>
  <Link href="/profile">
  
    <a>Profil</a>
    
    </Link>     
  <Link href="/posts/accompagnateur" >
    <a onClick={() =>handleMenu()}><Tooltip content="Accompagnateur de projets professionnels">Projets</Tooltip></a>
    </Link>
    <Link href="/posts/misenforme" >
    <a onClick={() =>handleMenu()}><Tooltip content="Mise en forme et correction de publications">Corrections</Tooltip></a>
    </Link>
    <Link href="/posts/accueildesclients" >
    <a onClick={(e) =>handleMenu()}><Tooltip content="Accompagnement des Collaborateurs et Clients">Accompagnement clients / collaborateurs</Tooltip></a>
    </Link>
    <Link href="/posts/cours" >
    <a onClick={(e) => handleMenu(e)}><Tooltip content="Cours d’anglais en distanciel ou en présentiel">Cours d’anglais</Tooltip></a>
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
                    <i id="hamburger" name="hamburger" className="fa fa-bars" alt="hamburger icon"></i>
                </a>
            </Link>
</div>
</BrowserView>
</div>

    )

}