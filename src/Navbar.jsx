import React from 'react'
import { NavLink } from 'react-router-dom';
import unit from '../src/img/unite.jpg'



function Navbar () {
    return(
        <>
        
  <div className="container-fluid" style={{backgroundColor:"white"}}>
 
      <div className="row">
          <div className="col-10">
     
  <nav className = "navbar navbar-expand-lg navbar-light fixed-top">
<NavLink className = "navbar-brand" to="/home" style={{color:"#fa8b15"}}><img src={unit} style={{height:"4.5vw"}}/>
  </NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <i class="fa fa-2x fa-caret-square-o-down"></i>
  </button>
  <div className = "collapse navbar-collapse" id="navbarSupportedContent">
    <ul className = "navbar-nav ml-auto">
      <li className = "nav-item">
        <NavLink className = "nav-link "  activeClassName="menu_active" to="/home">Home</NavLink>
      </li>
      <li className = "nav-item">
        <NavLink className = "nav-link" activeClassName="menu_active" to="/service">Service</NavLink>
      </li>
      <li className = "nav-item">
        <NavLink className = "nav-link" activeClassName="menu_active" to="/about">About</NavLink>
      </li>
      <li className = "nav-item">
        <NavLink className = "nav-link" activeClassName="menu_active" to="/project">Projects</NavLink>
      </li>
      <li className = "nav-item">
        <NavLink className = "nav-link" activeClassName="menu_active" to="/team">Team</NavLink>
      </li>
      <li className = "nav-item">
        <NavLink className = "nav-link" activeClassName="menu_active" to="/contact">Contacts</NavLink>
      </li>
      <li className = "nav-item">
        <a className = "nav-link" href="https://www.facebook.com/unite8software"> <i class="fa fa-facebook"></i> </a>
      </li>
      <li className = "nav-item">
        <a className = "nav-link" href="https://twitter.com/home"> <i class="fa fa-twitter" aria-hidden="true"></i> </a>
      </li>
    </ul>
    
  </div>
</nav>
       
         </div>
      </div>
  </div>
        </>
    )
}

export default Navbar;