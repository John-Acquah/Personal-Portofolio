import React from 'react';
import ProfilePic from './image/ProfilePic.png';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import StarIcon from '@material-ui/icons/Star';
import SocialMedia from './SMLinks'
import  './Body.css';


function Body() {
  return (
    <div className="Body_Main">

       <div className="layer1">
         <div className="years">5</div>
         <div className="exper">   Years of experience</div>
      

       </div>
        
  
    
       

    <div  className="profilepic" ><img src={ProfilePic}/>
    <div className="star">
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
       
        <div className="Name">
        
        <p className="Fname">John E.Acquah</p>

       
         </div>
         <SocialMedia />
    
    </div>


    <div className="Layer3">
      
      <div className="Title">
        Software Engineer
        <div className="bar_extension"></div>
        
      </div>

      <div className="Title_description">
        <h2>I'm a web designer.</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries.
         </p>

      </div>

      <div className="Address">
        <div className="Phone">

          <div className="PhoneIcon">
                   <PhoneIcon />
          </div>
         
                   0545341621
        </div>

        <div className="email">
            <div className="MailIcon">
                < MailOutlineIcon/>
            </div>
                johnacquah265@mail.com
        </div>

         {/* <div>
          <a href="" className="Read_More">Read More </a>
        </div>  */}
          <div className="More">

          <a className="more" href="">Read More</a> 
          </div>
         


      </div>

    </div>

    </div>
  );
}

export default Body;
