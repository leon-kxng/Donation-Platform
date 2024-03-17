import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Money() {
  const [donationAmount, setDonationAmount] = useState('');
  const [photoOrLink, setPhotoOrLink] = useState('');
  const [charityName, setCharityName] = useState('');
  const [charityDescription, setCharityDescription] = useState('');

  // Function to format input value as dollar amount
  const formatAmount = (value) => {
    // Remove non-digit charactrs
    const amountValue = value.replace(/[^\d.]/g, '');
    // Format the value as a dollar amount with two decimal places
    const formattedAmount = parseFloat(amountValue).toFixed(2);
    return formattedAmount;
  };

  // Event handler for donation amount input change
  const handleDonationAmountChange = (event) => {
    const { value } = event.target;
    // Format the input value
    const formattedValue = formatAmount(value);
    // Update the state with the formatted value
    setDonationAmount(formattedValue);
  };

  // Event handler for photo or link input change
  const handlePhotoOrLinkChange = (event) => {
    const { value } = event.target;
    // Update the state with the input value
    setPhotoOrLink(value);
  };

  // Event handler for charity name input change
  const handleCharityNameChange = (event) => {
    const { value } = event.target;
    // Update the state with the input value
    setCharityName(value);
  };

  // Event handler for charity description input change
  const handleCharityDescriptionChange = (event) => {
    const { value } = event.target;
    // Update the state with the input value
    setCharityDescription(value);
  };

  return (
    <div>
      <Form.Group controlId="donationAmount">
        <Form.Label>Donation Amount ($)</Form.Label>
        <Form.Control
          type="text"
          placeholder="$0.00"
          value={donationAmount}
          onChange={handleDonationAmountChange}
          aria-label="Donation Amount"
        />
      </Form.Group>

      <Form.Group controlId="photoOrLink">
        <Form.Label>Photo or Link</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter photo URL or link"
          value={photoOrLink}
          onChange={handlePhotoOrLinkChange}
          aria-label="Photo or Link"
        />
      </Form.Group>

      <Form.Group controlId="charityName">
        <Form.Label>Charity Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter charity name"
          value={charityName}
          onChange={handleCharityNameChange}
          aria-label="Charity Name"
        />
      </Form.Group>

      <Form.Group controlId="charityDescription">
        <Form.Label>Charity Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter a short description about the charity"
          value={charityDescription}
          onChange={handleCharityDescriptionChange}
          aria-label="Charity Description"
        />
      </Form.Group>
    </div>
  );
}

export default Money;
