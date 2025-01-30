import React from 'react'
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
    
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
    </div>
 

  </>
  )
}
