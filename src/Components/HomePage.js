import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../css/HomePage.css';
import CharityCard from './CharityCard';

function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="homepage-main">
      <div className="homepage-landing">        
        <div className="content-container">
          <p className="header-1">Speak Hope for the Homeless</p>
          <h1 className="header-2">Donate to children & senior Citizens</h1>
          <p className="header-3">In many regions across the globe, young school-going girls face challenges accessing essential items like pads for their menstrual hygiene. Studies conducted in 2016 by the Ministry of Education revealed that girls from impoverished families miss 20% of school days annually due to a lack of sanitary towels. The data indicates that a girl in primary school, between class 6 and 8, can lose up to 18 weeks out of 108 weeks, while those in high school can lose almost 24 weeks out of 144 weeks of learning. Our dedicated organization not only provides sanitary towels but also focuses on delivering clean water and sanitation facilities, including toilets, to ensure adherence to proper menstrual hygiene guidelines set by UNICEF.</p>          
          <div className="content-btns">
            <button className="become-donor-btn">Become a Lifesaver</button>
            <button className="signup-btn">SignUp A Charity</button>
          </div>
        </div>     
      </div>

      <div className="other-contents">
        <div className="row">
          <div className="col-md-6">
            <div className="content-container">
              <p className="header-4">Empower Lives through Generosity</p>
              <h1 className="header-5">Donate to children & senior Citizens</h1>
              <p className="header-6">In most sub-saharan countries, school going girls are unable to access pads and other supplies needed for their periods. The year 2016 studies from the ministry of education revealed girls from poor families miss 20 % of school days in a year due to lack of sanitary towels. The data indicated that a girl in primary school between class 6 and 8 can lose up to 18 weeks out of 108 weeks while those in high school can lose almost 24 weeks out of 144 weeks of learning. An organization dedicated to dealing with this problem is working on not just providing sanitary towels but also providing clean water and sanitation facilities such as toilets to ensure they are able to meet the guidelines for proper menstrual hygiene as defined by UNICEF</p>

              <div className="content-btns">
                <button className="become-donor-btn">Become a Lifesaver</button>
                <button className="signup-btn-2">Join the Charitable Cause</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="thecarousel">
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className="carousel"
                indicators={false}
                controls={true}
              >
                <Carousel.Item>
                  <img src="https://cdn.24.co.za/files/Cms/General/d/3408/8db74791f7174fcaa94fef3e742d61dd.jpg" className="d-block w-100" alt="First slide" />
                  <Carousel.Caption>
                    <h5 style={{ color: "#FFB840" }}>Support Clean Water Initiatives</h5>
                    <p style={{ color: "#ffff" }}>Help provide clean water to communities in need. Your donation can make a significant impact on improving sanitation and preventing waterborne diseases.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="https://cdn.24.co.za/files/Cms/General/d/3408/d49c0434cbd640a79021fc14aa14387e.jpg" className="d-block w-100" alt="Second slide" />
                  <Carousel.Caption>
                    <h5 style={{ color: "#FFB840" }}>Education for Every Child</h5>
                    <p style={{ color: "#ffff" }}>Your contribution can ensure that every child has access to quality education. Support our mission to provide educational resources and opportunities.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="https://www.unhcr.org/ke/wp-content/uploads/sites/2/2021/08/DSC9162-scaled.jpg" className="d-block w-100" alt="Third slide" />
                  <Carousel.Caption>
                    <h5 style={{ color: "#FFB840" }}>Empower Women and Girls</h5>
                    <p style={{ color: "#ffff" }}>Support initiatives that empower women and girls by providing essential resources, including sanitary towels and education on menstrual hygiene.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="donation-container">
        <p className="donation-message">
          Your generosity can make a difference! Join us in supporting these meaningful causes. Every contribution counts towards creating a brighter future for those in need.
        </p>
        <div className="card-container">
          <CharityCard />
          <CharityCard />
          <CharityCard />
          <CharityCard />
          <CharityCard />
          <CharityCard />
        </div>
      </div>

      <div className='homepage-testimonials'>
        <div className="testimonial-header">
          <p className="testimonial-title">Testimonials</p>
          <p className="testimonial-subtitle">What People Say</p>
        </div>

        <div className="testimonial-user-images">
          <img src="https://shorturl.at/iDGQV" alt="User 1" />
          <img src="https://shorturl.at/iDGQV" alt="User 2" />
          <img src="https://shorturl.at/iDGQV" alt="User 3" />
        </div>

        <div className="testimonial-content">
          <p className="testimonial-author">Robert Johnson</p>
          <p className="testimonial-location">United Canada</p>
          <p className="testimonial-text">
            These questions are used to provoke thought and discussion. They can be used to challenge the other person's assumptions, such as "Do you really think that's true?", or to get them to think about a different perspective, such as "What if we tried it this way? The specific questions to ask may vary depending on the context and the information you are seeking.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
