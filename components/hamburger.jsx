import hamburgerstyles from './hamburger.module.css'

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
  <a href="/" className={hamburgerstyles.active}>accueil</a>
 
  <div id="myLinks" className={hamburgerstyles.hidden}>
  
   
    <a href="/profile">à propos moi</a>
  </div>

  <a  href="javascript:void(0);"  className={hamburgerstyles.icon} onClick={(e) => handleClick(e)} >
    <i className="fa fa-bars"></i>
  </a>
</div>



    )

}