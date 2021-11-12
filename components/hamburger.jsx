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
  <Link href="/" className={hamburgerstyles.active}>accueil</Link>
 
  <div id="myLinks" className={hamburgerstyles.hidden}>
  
   
    <Link href="/profile">à propos moi</Link>
  </div>

  <a  href="javascript:void(0);"  className={hamburgerstyles.icon} onClick={(e) => handleClick(e)} >
    <i className="fa fa-bars"></i>
  </a>
</div>



    )

}