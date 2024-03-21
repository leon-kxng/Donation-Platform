import React, { useState } from 'react';
import { Form, Button, ProgressBar, Card, Container, Row, Col, Modal } from 'react-bootstrap';
import Select from 'react-select';
import countries from 'react-select-country-list';
import axios from 'axios';
import '../css/CharitySignForm.css';

const CharitySignUpForm = () => {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false); 
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [charityTitle, setCharityTitle] = useState('')
  const [fundraisingReason, setFundraisingReason] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [mission, setMission] = useState('')
  const [goal, setGoal] = useState(1000)
  const [raised, setRaised] = useState(0)
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mapDetails, setMapDetails] = useState('');

  const countryOptions = countries().getData();
 
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
 
  
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
  };

  const handleRemoveImageUrl = () => {
    setImageUrl('');
  };

  const handleSubmit = async () => {
    if (!charityTitle || !fundraisingReason || !selectedCountry || (!selectedFile && !imageUrl) || !email || !phoneNumber || !mapDetails) {
      // Add more specific validation as needed
      console.error('Please fill out all required fields.');
      return;
    }
  
    const contactDetails = {
      charity_email: email,
      map_details: mapDetails,
      phone_number: phoneNumber,
    };
  
    const data = {
      name: charityTitle,
      description: fundraisingReason,
      goal: parseFloat(goal),
      raised: parseFloat(raised),
      mission,
      contact_details: [contactDetails],
      image_url: selectedFile ? selectedFile : imageUrl,
    };
  
    try {
      const response = await axios.post('/charities', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setShowModal(true);
      console.log('Charity signup successful:', response.data);
    } catch (error) {
      console.error('Error signing up charity:', error);
    }
  }

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <Card className="custom-card" style={{ 
            backgroundImage: 'url("https://i.pinimg.com/236x/93/9e/79/939e795a2a354d0a0adb39d4a0bcf699.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#FFB840',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
          >
            <Card.Body>
              <Card.Title>Where are you located at?</Card.Title>
              <Select
                options={countryOptions}
                value={selectedCountry}
                onChange={handleCountryChange}
                placeholder="Select your country"
              />
              <Card.Title>What best describes why you're Charity?</Card.Title>
              <Form.Group controlId="fundraisingReason">
              <Form.Control
                as="textarea"
                rows={3}
                value={fundraisingReason}
                onChange={(e) => setFundraisingReason(e.target.value)}
                placeholder="Enter your charity description"
                required
              />              
              </Form.Group>
              <Button onClick={nextStep} variant="primary" className="float-right">Continue</Button>
            </Card.Body>
          </Card>
        );
      case 2:
        return (
          <Card className="custom-card" style={{ 
            backgroundImage: 'url("https://i.pinimg.com/236x/02/19/94/021994d030f474a18eeb26b32b472f63.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#FFB840',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
          >
            <Card.Body>
              <Card.Title>Your starting goal</Card.Title>
              <Form.Group controlId="goal">
                <Form.Control
                  type="number"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="Enter your starting goal" />
              </Form.Group>
              <Card.Title>What Amount Have you raised</Card.Title>
              <Form.Group controlId="goal">
                <Form.Control
                  type="number"
                  value={raised}
                  onChange={(e) => setRaised(e.target.value)}
                  placeholder="Enter current raised amount" />
              </Form.Group>
              {/* Relevant details */}
              <p>"Wow! 🌟 Your dedication to your cause is absolutely inspiring! By setting this goal, you're not just aiming high—you're showcasing the incredible power of ambition and compassion. Together, we can turn dreams into actions and make a lasting impact. We're here to champion your journey every step of the way! 💫🚀 #DreamBig"</p>
              <Button onClick={prevStep} variant="secondary">Back</Button>
              <Button onClick={nextStep} variant="primary">Continue</Button>
            </Card.Body>
          </Card>
        );
      case 3:
        return (
          <Card className="custom-card" style={{ 
            backgroundImage: 'url("https://i.pinimg.com/236x/c9/d9/05/c9d905165323c176cda3947feee2568d.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#FFB840',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
          >
            <Card.Body>
              <Card.Title>Enter your charity title</Card.Title>
                <Form.Group controlId="title">
                <Form.Control
                  type="text"
                  value={charityTitle}
                  onChange={(e) => setCharityTitle(e.target.value)}
                  placeholder="Enter your charity title"
                  required
                />
                </Form.Group>
              <Card.Title>Enter your Mission</Card.Title>
                <Form.Group controlId="description">
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={mission}
                  onChange={(e) => setMission(e.target.value)}
                  placeholder="Enter your mission"
                  required
                />
                </Form.Group>
              {/* Relevant details */}              
              <Button onClick={prevStep} variant="secondary">Back</Button>
              <Button onClick={nextStep} variant="primary">Continue</Button>
            </Card.Body>
          </Card>
        );

        case 4:
          return (
            <Card className="custom-card" style={{ 
              backgroundImage: 'url("https://i.pinimg.com/236x/e1/ec/c5/e1ecc58bbf9318267231dbe49051fca4.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: '#FFB840',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
            >
              <Card.Body>
                <Card.Title>Upload an image or input a link</Card.Title>
                <div className="upload-box">
                  {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Uploaded" className="uploaded-image" width="100px" />}
                  {imageUrl && <img src={imageUrl} alt="From URL" className="uploaded-image" />}
                  <input type="file" onChange={handleFileChange} />
                  <Button variant="danger" onClick={handleRemoveImage}>Remove Image</Button>
                  
                  <input type="text" value={imageUrl} onChange={handleImageUrlChange} placeholder="Paste image link here" />
                  <Button variant="danger" onClick={handleRemoveImageUrl}>Remove Link</Button>
                </div>
                <Button onClick={prevStep} variant="secondary">Back</Button>
                <Button onClick={nextStep} variant="primary">Continue</Button>
              </Card.Body>
            </Card>
          );
      
        case 5:
          return (
            <Card className="custom-card" style={{ 
              backgroundImage: 'url("https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4-1440x700.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: '#FFB840',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
            >
              <Card.Body>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </Form.Group>
                <Form.Group controlId="mapDetails">
                  <Form.Label>Map Details or Link</Form.Label>
                  <Form.Control
                    type="text"
                    value={mapDetails}
                    onChange={(e) => setMapDetails(e.target.value)}
                    placeholder="Enter your map details or link"
                  />
                </Form.Group>
                  <Button onClick={prevStep} variant="secondary">Back</Button>
                  <Button onClick={nextStep} variant="primary">Continue</Button>
              </Card.Body>
            </Card>
          );  

      case 6:
        return (
          <Card className="custom-card" style={{ 
            backgroundImage: 'url("https://i.pinimg.com/236x/6f/b2/86/6fb286849b3ed884d681c42be6f524be.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <h4 className="mb-4">Thank you for taking the bold step of creating charities and making a positive impact on the world.</h4>
                  <p className="lead">Your dedication to noble causes inspires us all. We wish you the best of luck on your journey of raising funds and changing lives. Together, we can make a difference!</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={prevStep} variant="secondary">Back</Button>
                  <Button onClick={handleSubmit} variant="primary">Complete Charity</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        );

      default:
        return null;
    }
  };
  

  return (
    <Container className="charity-form-container">
      <div className="mini-header">
        {/* <img src="https://c7.alamy.com/comp/C041G1/thoughtful-young-poor-lower-caste-indian-street-girls-sisters-black-C041G1.jpg" alt="background-images"/> */}
        <button>Home</button><button>Sign A Charity</button>   
        <p>SignUp Your Charity</p>     
      </div>
      <Row className="justify-content-md-center mt-5">
        <Col md={8}>
          <ProgressBar now={(step / 6) * 100} label={`${step}/6`} className="mb-3" />
          {renderForm()}
        </Col>
      </Row>

      {/* Modal for showing the thank you message */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your charity application has been received.</p>
          <p>We will review your application and send you an email confirmation shortly.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CharitySignUpForm;


