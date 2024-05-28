// App.js
import React from 'react';
import PeopleImage from "../Images/people.png"
import ProductImage from "../Images/ProductImage.png"
import location from "../Images/location.png"
import ProgramImage from "../Images/program image.png"
import './index.css';

function Features() {
  return (
    <div className="container">
      <div className="card1">
        <div className="card-content">
          <div className='headingDiv'>
          <img src={PeopleImage} alt="people" className='headingImage'/>
          <h5>People</h5>
          </div>
          <p className='card-para'>Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p>
          <button className='connect-button'>Connect</button>
        </div>
      </div>
      <div className="card2">
        <div className="card-content">
        <div className='headingDiv'>
          <img src={location} alt="people" className='headingImage'/>
          <h5>Place</h5>
          </div>
          <p className='card-para'>Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hot<span className="highlight">M</span>ue.</p>
          <button className='connect-button'>Meet up</button>
        </div>
      </div>
      <div className="card3">
        <div className="card-content">
        <div className='headingDiv'>
          <img src={ProductImage} alt="people" className='headingImage'/>
          <h5>Product</h5>
          </div>
          <p className='card-para'>Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.</p>
          <button className='connect-button'>Get it</button>
        </div>
      </div>
      <div className="card4">
        <div className="card-content">
        <div className='headingDiv'>
          <img src={ProgramImage} alt="people" className='headingImage'/>
          <h5>Program</h5>
          </div>
          <p className='card-para'>Find events, meetups and workshops related to your hobby. Register or buy tickets online.</p>
          <button className='connect-button'>Attend</button>
        </div>
      </div>
    </div>
  );
}

export default Features;