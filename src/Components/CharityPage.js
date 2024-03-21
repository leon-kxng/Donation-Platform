import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router
import '../css/CharityPage.css';
import Payment from './Payment'

const CharityPage = () => {
  const { charityId } = useParams(); // Get the charityId from the URL
  // console.log(charityId)
  const [charityData, setCharityData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    const fetchCharityData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/charities/${charityId}`);


        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCharityData(data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchCharityData();
  }, [charityId]);

  if (!charityData) {
    return <div>Loading...</div>;
  }

  const progress = (charityData.raised / charityData.goal) * 100;

  return (
    <div className="charity-page-container">
      <div className="main-content">
        <div className="charity-card">
          <h2 className="page-title">Donate to {charityData.name}</h2>
          <div className="charity-image-container">
            <img src={charityData.image_url} alt="Charity Image" className="charity-image" />
          </div>
          <div className="charity-info">
            <img src={charityData.image_url} alt="Organizer Image" className="organizer-image" />
            <div>
              <p className="organizer-name">{charityData.organizerName}, the organizer of the charity</p>
              <p className="creation-date">Created at: {charityData.creationDate}</p>
            </div>
          </div>
          <div className="charity-description">
            <p>{charityData.description}</p>
          </div>
        </div>


        <div className="donation-card">
          <h3 className="donation-heading">Support {charityData.name}'s Cause::</h3>
          <p className="donation-status">${charityData.raised} raised of ${charityData.goal} goal</p>
          <ProgressBar now={progress} label={'${progress.toFixed(2)}%'} variant="success" className="custom-progress-bar" />
          <button onClick={toggleModal} className="donate-btn">Donate Now</button>
          {showModal && <Payment toggleModal={toggleModal} />}
          <p className="donation-note">Your contribution helps ensure the success of our initiatives and projects. We are committed to making a positive impact in our community.</p>
          <ul className="donation-perks">
            <li>Recognition on our website or promotional materials for donations over $100.</li>
            <li>Exclusive updates and reports on the progress of our projects for regular donors.</li>
            <li>A sense of fulfillment in knowing that you're part of something bigger, creating positive change.</li>
            <li>Monthly newsletters highlighting the impact of your donation and stories of individuals benefiting from our programs.</li>
          </ul>
          <div className="donation-options">
            <p className="donation-options-heading">Other Ways to Support:</p>
            <ul className="donation-options-list">
              <li>Volunteer your time and skills to contribute directly to our projects.</li>
              <li>Spread awareness by sharing our mission and initiatives on social media.</li>
              <li>Organize fundraising events in your community to support our cause.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contact-card">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p><FaEnvelope className="icon" /> <a href={`mailto:${charityData.contact_details.charity_email}`}>{charityData.email}</a></p>
          <p><FaMapMarkerAlt className="icon" /> <a href={charityData.contact_details.map_details}>Find {charityData.name} on the Map</a></p>
          <p><FaClock className="icon" /> <strong>Last Contact:</strong> {charityData.phone_number}</p>
        </div>
        
        <div className="user-message">
          <h3>Write Your Message</h3>
          <textarea placeholder="Type your message here..." ></textarea>
          <button className='send-message-btn'>Send Message</button>
        </div>
      </div>
    </div>
  );
  };

export default CharityPage;
