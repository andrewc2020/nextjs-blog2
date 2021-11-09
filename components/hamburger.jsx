import hamburgerstyles from './hamburger.module.css'
export default function Hamburger(){
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      } 

    return (
      
<div className={hamburgerstyles.topnav} >
  <a href="#home" className={hamburgerstyles.active}>Logo</a>
 
  <div id="myLinks">
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>

  <a href="javascript:void(0);" className="icon" onclick="myFunction()">
    <i className="fa fa-bars"></i>
  </a>
</div>

    )

}