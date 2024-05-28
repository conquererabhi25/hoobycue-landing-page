// Footer.js
import React from 'react';
import SocialMediaImage from "../Images/social Media.png"
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
        <p className='footerPara'>Hobbycue Website</p>
          <ul>
            <li className='listtext'>About Us</li>
            <li className='listtext'>Our Services</li>
            <li className='listtext'>Work with Us</li>
            <li className='listtext'>FAQ</li>
            <li className='listtext'>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
        <p className='footerPara'>How Do I</p>
          <ul>
            <li className='listtext'>Sign Up</li>
            <li className='listtext'>Add a Listing</li>
            <li className='listtext'>Claim Listing</li>
            <li className='listtext'>Post a Query</li>
            <li className='listtext'>Add a Blog Post</li>
            <li className='listtext'>Other Queries</li>
          </ul>
        </div>
        <div className="footer-column">
        <p className='footerPara'>Quick Links</p>
          <ul>
            <li className='listtext'>Listings</li>
            <li className='listtext'>Blog Posts</li>
            <li className='listtext'>Shop / Store</li>
            <li className='listtext'>Community</li>
          </ul>
        </div>
        <div className="footer-column social-media">
        <p className='footerPara'>Social Media</p>
          <img src={SocialMediaImage} alt="socialMedia"/>

          <div className="invite-friends">
          <p className='footerPara'>Invite Friends</p>
           <div>
           <input type="email" placeholder="Email ID" />
            <button>Invite</button>
           </div>
          </div>

        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Purple Cues Private Limited</p>
      </div>
    </footer>
  );
};



export default Footer;