
import React from 'react';
import DobuleQuote from "../Images/doublequote.png"
import SoundTrack from "../Images/Audio Track.png"
import Singer from "../Images/singer.png"
import './index.css';

const Testimonial = () => {
  return (
    <div className="testimonial-container">
     
      <div className="testimonial-content">
        <div className='heading-box'>
            <img src={DobuleQuote} alt="quote" className='quoteimage'/>
        <h4>Testimonials</h4>
        </div>
        <p>
          In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like
          minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and
          exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I
          can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have
          discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an
          excellent idea and I highly recommend it.
        </p>
        <div className="testimonial-video">
            <img src={SoundTrack} alt="sound" className='soundtrckimg'/>
            <img src={Singer} alt="singer" className='sinertrckimg'/>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;