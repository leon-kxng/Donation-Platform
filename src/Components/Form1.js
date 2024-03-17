import React, { useState } from 'react';
import ContinueButton from './ContinueButton';

function Form1() {

  const [country, setCountry] = useState('');
  const [postalAddress, setPostalAddress] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  // Handler functions for input changes
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handlePostalAddressChange = (event) => {
    setPostalAddress(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
    return (
        <>
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
   
      {/* Country input */}
      <label htmlFor="country" style={{ marginBottom: '10px', display: 'block' }}>Country:</label>
      <input
       type="text"
       id="country"
       value={country}
       onChange={handleCountryChange}
       style={{ width: '100%', height: '40px', padding: '5px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
     />
         {/* Postal address input */}
       <label htmlFor="postalAddress" style={{ marginBottom: '10px', display: 'block' }}>Postal Address:</label>
       <input
       type="text"
       id="postalAddress"
       value={postalAddress}
       onChange={handlePostalAddressChange}
       style={{ width: '100%', height: '40px', padding: '5px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
     />
      <br/><br/><br/>
      <h3>What best describes your reason for fundraising ?</h3>
   
   
     {/* Options input */}
     <label htmlFor="options" style={{ marginBottom: '10px', display: 'block' }}>Options:</label>
       <select
       id="options"
       value={selectedOption}
       onChange={handleOptionChange}
       style={{ width: '100%', height: '40px', padding: '5px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
     >
      <option value="">Select an option</option>
        <option value="animals">Animals</option>
        <option value="business">Business</option>
        <option value="community">Community</option>
        <option value="education">Education</option>
        <option value="emergencies">Emergencies</option>
        <option value="events">Events</option>
        <option value="family">Family</option>
        <option value="Funeral & Memorials">Funeral & Memorials</option>
        <option value="Medical">Medical</option>
        <option value="Monthly bills">Monthly bills</option>
        <option value=">Newly weds">Newly weds</option>
        <option value="Sports">Sports</option>
        <option value="Travel">Travel</option>
        <option value="Ukraine Relief">Ukraine Relief</option>
        <option value="Volunteer">Volunteer</option>
        <option value="Wishes">Wishes</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <br/><br/>
    {/* <ContinueButton /> */}
       </>
    )
   

 

}

export default Form1;

