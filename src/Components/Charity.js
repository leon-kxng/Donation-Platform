
import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// eslint-disable-next-line
import { FaChartSimple, FaRegStar, FaRegCircleUser } from "react-icons/fa6";
import { LiaTagSolid } from "react-icons/lia";
// import { useState } from 'react';
// import ContinueButton from './Continue';
import './Charity.css'



function Charity() {

//   const [country, setCountry] = useState('');
//   const [postalAddress, setPostalAddress] = useState('');
//   const [selectedOption, setSelectedOption] = useState('');

//   // Handler functions for input changes
//   const handleCountryChange = (event) => {
//     setCountry(event.target.value);
//   };

//   const handlePostalAddressChange = (event) => {
//     setPostalAddress(event.target.value);
//   };

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
  
  
  return (<><div className="gradient-background-container" />
  <br/><br/><br/>
  <h1 className="title">Heels 4 Pads Society</h1>
  <div style={{ display: 'flex'}}>
  <Image src="https://shorturl.at/houAC" style={{ marginRight: '200px' }}fluid />
  <Card 
  style={{ 
    width: '18rem', 
    border: '1px solid #ccc', 
    borderRadius: '10px', 
    alignItems: 'center', 
    textAlign: 'center', 
    padding: '80px', 
    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' // Add box shadow
  }}
>

  <Card.Body>
    <Card.Title >121,917 raised of 88,000 total</Card.Title>
    <br/><br/><br/>
    <Form.Label>Range</Form.Label>
      <Form.Range />
      <br/><br/><br/>
    <Button 
  variant="primary" 
  size="lg"
  style={{
    borderRadius: '50px',
    backgroundColor: 'orange',
    fontSize: '1.5rem', // Increase the font size
    padding: '10px 20px', // Adjust padding to fit the larger size
    marginRight: '40px',
  }}
>
  Donate
</Button>

<Button 
  variant="primary" 
  size="lg"
  style={{
    borderRadius: '50px',
    backgroundColor: 'orange',
    fontSize: '1.5rem', // Increase the font size
    padding: '10px 20px', // Adjust padding to fit the larger size
  }}
>
Share
</Button>
<br/><br/><br/>
<h3>
<FaChartSimple /> 527 people have just donated
    </h3>
    <br/><br/><br/>
    <div>
    <div>
  <Button 
    variant="success"
    style={{
      color: 'black',           // Set text color to black
      backgroundColor: 'orange', // Set background color to orange
      marginRight: '3px',      // Add margin between buttons
      borderRadius: '20px',     // Apply border radius
      padding: '15px 30px',     // Adjust padding to enlarge the button
      fontSize: '1.2rem'        // Increase font size
    }}
  >
    See All
  </Button>{' '}
  <Button 
    variant="warning"
    style={{
      color: 'black',           // Set text color to black
      backgroundColor: 'orange', // Set background color to orange
      borderRadius: '20px',     // Apply border radius
      padding: '15px 30px',     // Adjust padding to enlarge the button
      fontSize: '1.2rem'        // Increase font size
    }}
  >
    <FaRegStar /> See Top
  </Button>
</div>
</div>
  </Card.Body>
</Card>

</div>
<h3><FaRegCircleUser />  Anne-Kristine Meier is the founder of this fundraiser.</h3>
<div className="line"></div>
<h3>Created 3 d ago  <LiaTagSolid /><span className='color'>Emergencies</span></h3>
<div className="line"></div>
<h3 style={{ maxWidth: '600px' }}>
  "Zum Donnerstag kam es zu einem verheerenden Brand bei der Familie. Sie haben alles verloren. Gott sei dank sind sie alle lebend aus dem Haus gekommen. Jetzt heißt es unter die Arme greifen". Jeder Cent kann der Familie helfen. Ein Riesen Dankeschön an alle die gespendet haben oder noch Spenden, egal welchen Betrag, egal ob Geld oder Sachspenden. Die Familie ist überwältigt von so viel Anteilnahme und der großen Welle der Hilfsbereitschaft.
</h3>

  </>
  );
}
export default Charity;