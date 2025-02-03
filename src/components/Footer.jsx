import React from "react";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-icons">
        <a href="https://www.facebook.com/NetflixUK" target='_blank'> <FaFacebookF /></a> 

<a href="https://www.instagram.com/NetflixUK" target="_blank" rel="noopener noreferrer"> <BsInstagram /></a>

<a href="https://twitter.com/NetflixUK" target="_blank" rel="noopener noreferrer">  <BsTwitter /></a>

<a href="https://www.youtube.com/user/netflixuk" target="_blank" rel="noopener noreferrer"> <BsYoutube /></a>

        </div>
        <div className="footer-list">
          <div className="col-1">
            <ul>
              <a href="https://www.netflix.com/browse/audio-description"><li> Audio Description</li></a>
              <a href="http://ir.netflix.com/"><li> Investor Relations</li></a>
              <a href="https://help.netflix.com/legal/privacy"><li>  Privacy</li></a>
              <a href="https://help.netflix.com/contactus"><li> Contact Us</li></a>
              
            </ul>
          </div>
          <div className="col-2">
            <ul>
            <a href="https://help.netflix.com/contactus"><li> Help Centre</li></a>
            <a href="https://jobs.netflix.com/"><li> Jobs</li></a>
            <a href="https://help.netflix.com/legal/notices"><li> Legal Notices</li></a>
            <a href="https://netflix.com/adchoices"><li> Advert Choices</li></a>
             
            </ul>
          </div>
          <div className="col-3">
            <ul>
            <a href="https://www.netflix.com/redeem"><li> Gift Card</li></a>
            <a href="https://netflix.shop/"><li> Netflix Shop</li></a>
            <a href="https://www.netflix.com/Cookies"><li> Cookie Prefeences</li></a>
             
            </ul>
          </div>
          <div className="col-4">
            <ul>
            <a href="https://media.netflix.com/"><li> Media Centre</li></a>
            <a href="https://help.netflix.com/legal/termsofuse"><li> Terms Of Use</li></a>
            <a href="https://help.netflix.com/legal/corpinfo"><li> Corporate Information</li></a>
            </ul>
          </div>
          
        </div>
        <div className="copyright">
      © 1997-2025 Netflix, Inc.
    </div> 
      </div>
      {/*     
    <div className="footerContainer">
   <div className="footer-icons">
    <a href="https://www.facebook.com/NetflixUK" target='_blank'> <FaFacebookF /></a> 

     <a href="https://www.instagram.com/NetflixUK" target="_blank" rel="noopener noreferrer"> <BsInstagram /></a>

    <a href="https://twitter.com/NetflixUK" target="_blank" rel="noopener noreferrer">  <BsTwitter /></a>

     <a href="https://www.youtube.com/user/netflixuk" target="_blank" rel="noopener noreferrer"> <BsYoutube /></a>
    </div>
      <div className="col-1">
        <li> Audio</li>
        <li>Investor </li>
        <li>Legal</li>
      </div>
      <div className="col-2">
        <li>Help Center</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
      </div>
      <div className="col-3">
        <li>Gift Cards</li>
        <li>Terms Of Use</li>
        <li>Corporate Information</li>
      </div>
      <div className="col-4">
        <li>Media Center</li>
        <li>Privacy</li>
        <li>Contact</li>
      </div>
    </div>
    <div className="copyright">
      © 1997-2025 Netflix, Inc.
    </div> */}
    </>
  );
};
