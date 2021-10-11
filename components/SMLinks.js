import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import  IconButton from "@material-ui/core";
import './SMLinks.css'
import { IconButton } from '@material-ui/core';

function SocialMedia() {
    return (
     
        <div className="linkcontainer">
            <div className="link_wrapper">
                <ul className="follow">
                    <li><a href="" className="SM"> <FacebookIcon /></a></li>
                    <li><a href=""className="SM"> <TwitterIcon /> </a></li>
                    <li><a href=""className="SM"> < InstagramIcon /></a></li>
                    <li><a href="" className="SM"> < LinkedInIcon/></a></li>
                   
                </ul>
            </div>
        </div>
    );
  }
  
  export default SocialMedia;