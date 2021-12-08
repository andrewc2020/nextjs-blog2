import hamburgerstyles from './hamburger.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Mailto from './mailto'
import Tooltip from './tooltip'


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
    <a onClick={(e) =>handleMenu(e)}>Working Holiday</a>
    </Link>
    <Link href="javascript:void(0);" >
    <Mailto email="someone@somewhere.com" subject="Salut" body="Tapez%20%0Avotre%20message%20ici%0A">Contact</Mailto>
    </Link>
    <Link href="/posts/tarifs" >
    <a onClick={(e) => handleMenu(e)}><Tooltip content="I'm a tooltip!">Tarifs</Tooltip></a>
   
    </Link>
   
  </div>
            <Link href="javascript:void(0);">
                <a name="hamburger_icon" className={hamburgerstyles.icon} onClick={(e) => handleClick(e)} >
                    <i id="hamburger" className="fa fa-bars" alt="hamburger icon"></i>
                </a>
            </Link>
</div>



    )

}