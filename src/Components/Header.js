import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../src/Styles/Header.css'
import headerlogo from '../Images/headerlogo.png'
import { useState } from 'react';


const Navbar1=()=> {
  const [icon,seticon] = useState(true)
  const HandleIcon = () => {
    seticon(!icon)
  }
  return (
   
  
    <nav  className=" style navbar navbar-expand-lg navbar-light bg-light">
    
  
    <img className='Logo' src="https://bengkelthemethemes5e401.zapwp.com/q:i/r:0/wp:1/w:1/u:https://bengkeltheme.themesawesome.com/wp-content/uploads/sites/10/2015/05/logo.png"></img> 
   
    <div className='toggle_icon'>
    <div onClick={HandleIcon}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span>
 { icon   ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>}
</span>
    </div>
    </div>
    
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
        
          <a className="nav-link active text-black " aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class=" nav-link text-black" href="/about">ABOUT</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-black" href="/services">SERVICES</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-black" href="/blogs">BLOGS</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-black" href="/testimonial">TESTIMONIAL</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-black" href="/faq">FAQ</a>
        </li>
       
       
      </ul>
    
    </div>
</nav>




  
 
  );
  
}

export default Navbar1;