import React, { useState } from 'react';
// import './ContactUs.css';
import { FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
// import './ContactUs.css';
import '../css/ContactPage.css'


function ContactPage() {
  const [fullName, setFullName] = useState('Alex Jordan');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('name@example.com');
  const [message, setMessage] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to send the message
    console.log('Message sent:', { fullName, phone, email, message });
    // Clear the input fields after sending the message
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/943b895069b5dece178a43f0f7a4b97cfc207f9aa9193e05a1412dff3bd6544d?apiKey=3e0d261692c841b7bb088c0358ed4b4b&"
              className="img"
            />
            <div className="div-4" />
            <div className="div-5">
              <div className="div-6">Phone</div>
              <div className="div-7">+ 012 345 678</div>
            </div>
          </div>
          <div className="div-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bab0f98eeedec51b7eef84aa2a6f5fb30d214a7d3450dc8eecca7e59fdd7ba1f?apiKey=3e0d261692c841b7bb088c0358ed4b4b&"
              className="img"
            />
            <div className="div-9" />
            <div className="div-10">
              <div className="div-11">Email</div>
              <div className="div-12">Helpfull@gmail.com</div>
            </div>
          </div>
          <div className="div-13">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdc4f39c079e3074e0b69f0b58a64f8c3142cbee4441bce789d5e7e53f4ac569?apiKey=3e0d261692c841b7bb088c0358ed4b4b&"
              className="img"
            />
            <div className="div-14" />
            <div className="div-15">
              <div className="div-16">Location</div>
              <div className="div-17">View on Google Map</div>
            </div>
          </div>
        </div>
        <div className="div-18">
      <div className="div-19">
        <div className="column">
          <div className="div-20">
            <form onSubmit={handleSubmit}>
              <div className="div-21">Full Name</div>
              <input type="text" value={fullName} onChange={handleFullNameChange} />
              <div className="div-23">Phone</div>
              <input type="text" value={phone} onChange={handlePhoneChange} />
              <div className="div-25">Email address</div>
              <input type="email" value={email} onChange={handleEmailChange} />
              <div className="div-27">Message</div>
              <textarea value={message} onChange={handleMessageChange}></textarea>
              <button type="submit" className="div-29">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}



export default ContactPage;