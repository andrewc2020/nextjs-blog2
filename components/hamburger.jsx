import hamburgerstyles from './hamburger.module.css'

export const Hamburger = () =>{
  
  const handleClick = (e) => {
    e.preventDefault()
    var x = document.getElementById("myLinks");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    


};
    return (
       

<div className={hamburgerstyles.topnav} >
  <a href="/" className={hamburgerstyles.active}>Accueil</a>
 
  <div id="myLinks">
  
   
    <a href="/profile">Qui sommes nous?</a>
  </div>

  <a  href="javascript:void(0);"  className={hamburgerstyles.icon} onClick={(e) => handleClick(e)} >
    <i className="fa fa-bars"></i>
  </a>
</div>



    )

}