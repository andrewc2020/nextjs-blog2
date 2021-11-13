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
  
   
    <Link href="/profile">
    <a>à propos moi </a>
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