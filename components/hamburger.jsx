import hamburgerstyles from './hamburger.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Mailto from './mailto'
import Tooltip from './tooltip'


export const Hamburger = () =>{

    
  
  const handleClick = (e, prevent) => {
    prevent?e.preventDefault():''
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
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
    <a onClick={(e) => handleClick(e, false)}>Projets </a>
    </Link>
    <Link href="/posts/misenforme" >
    <a onClick={(e) => handleClick(e, false)}>Corrections</a>
    </Link>
    <Link href="/posts/accueildesclients" >
    <a onClick={(e) => handleClick(e, false)}>Accompagnement clients / collaborateurs</a>
    </Link>
    <Link href="/posts/cours" >
    <a onClick={(e) => handleClick(e, false)}>Cours d’anglais</a>
    </Link>
    <Link href="/posts/workingholiday" >
    <a onClick={(e) => handleClick(e, false)}>Working Holiday</a>
    </Link>
    <Link href="javascript:void(0);" >
    <Mailto email="someone@somewhere.com" subject="Salut" body="Tapez%20%0Avotre%20message%20ici%0A">Contact</Mailto>
    </Link>
    <Link href="/posts/tarifs" >
    <a onClick={(e) => handleClick(e)}>Tarifs</a>
   
    </Link>
   
  </div>
            <Link href="javascript:void(0);">
                <a name="hamburger_icon" className={hamburgerstyles.icon} onClick={(e) => handleClick(e, true)} >
                    <i id="hamburger" className="fa fa-bars" alt="hamburger icon"></i>
                </a>
            </Link>
</div>



    )

}