import hamburgerstyles from './hamburger.module.css'
import Link from 'next/link'

export const Hamburger = () =>{
  
  const handleClick = (e) => {
    e.preventDefault()
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
        
  <Link href="/posts/accompagnateur">
    <a>Projets </a>
    </Link>
    <Link href="/posts/misenforme">
    <a>Publication </a>
    </Link>
    <Link href="/posts/accueildesclients">
    <a>Accueil clients</a>
    </Link>
    <Link href="/posts/cours">
    <a>Cours d’anglais</a>
    </Link>
    <Link href="/posts/workingholiday">
    <a>Working Holiday</a>
    </Link>
    <Link href="/profile">
    <a>A propos de moi </a>
    </Link>
  </div>
            <Link href="javascript:void(0);">
                <a  className={hamburgerstyles.icon} onClick={(e) => handleClick(e)} >
                    <i className="fa fa-bars"></i>
                </a>
            </Link>
</div>



    )

}