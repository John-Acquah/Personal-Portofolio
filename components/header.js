
import React from "react";
import './Header.css';

import Search from '@material-ui/icons/Search';

function mobilemenu(){
    var menu=document.getElementsByClassName='HamuburgurMenu';
    return(
       

        menu.style="diplay:block"
    )

   
}



function Header() {
  return (
    
    <div className="Header-Container">
        <div className="Logo">
            The Megalands
        </div>
        <nav className="headerlinks">
            <ul className="navlinks">
                <li><a  className="alinks" href="">Home</a></li>
                <li><a  className="alinks"href="">About Us</a></li>
                <li ><a className="alinks"href="">Service</a></li>
                <li><a  className="alinks"href="">Work</a></li>
              
                <li><a  className="alinks" href="">Blog</a></li>
                <li ><a className="alinks"href="">Contact</a></li>
                <li> 
                   <Search />
                </li>
                <div className="HamuburgurMenu">
                <div className="Bars"></div>
                <div className="Bars"></div>
                <div className="Bars"></div>
                
                </div>
                    

             
            </ul>

           

                <div classname="mobilemenu" onClick=" mobilemenu()">

                 <ul className="menulist">
                    <li><a className="mobilelinks"href="">Home</a></li>
                    <li><a className="mobilelinks"href="">About Us</a></li>
                    <li><a className="mobilelinks"href="">Service</a></li>
                    <li><a className="mobilelinks"href="">Work</a></li>
                    <li><a className="mobilelinks"href="">Blog</a></li>
                    <li><a className="mobilelinks"href="">Contact</a></li>

                </ul>
                </div>

        </nav>

       
       


    </div>
  
  );
}

export default Header;
