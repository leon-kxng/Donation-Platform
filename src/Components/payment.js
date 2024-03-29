import React, { useState } from "react";
import PaymentProcessing from "./PaymentProcessing";
import "../css/payment.css";

const Payment = ({ toggleModal }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [showProcessing, setShowProcessing] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(true); // Initially show payment modal

  const pay = () => {
    // Close the payment modal
    setShowPaymentModal(false);
    // Show the PaymentProcessing modal
    setShowProcessing(true);
    
    // Replace 'YOUR_TINYPESA_API_KEY' with your actual API key
    const apiKey = 'FBbLzy7uc41';
    
    // Construct the request body for Tinypesa API
    const requestBody = new URLSearchParams({
      amount: amount,
      msisdn: phoneNumber,
      account_no: "200",
    });

    // Make the payment request to Tinypesa API
    fetch("https://tinypesa.com/api/v1/express/initialize", {
      method: "POST",
      headers: {
        Apikey: apiKey,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: requestBody.toString(),
    })
    .then(response => {
      if (!response.ok) {
        console.error("Payment processing failed");
      }
      return response.json();
    })
    .then(data => {
      // After successfully processing payment with Tinypesa API, send data to Flask backend
      sendToBackend(data);
    })
    .catch(error => {
      console.error("Error during payment processing:", error);
    });
  };

  const sendToBackend = (paymentData) => {
    // Make a request to your Flask backend
    fetch("http://localhost:5000/callback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
    })
    .then(response => {
        if (!response.ok) {
            console.error("Error sending data to backend");
            throw new Error("Error sending data to backend");
        }
        return response.json();
    })
    .then(data => {
        // Check if the response is an array of objects
        if (Array.isArray(data)) {
            // Iterate over each object in the array
            data.forEach(obj => {
                console.log(obj); // Log each object for debugging
                // Process each object as needed
            });
        } else {
            console.log(data); // Log the single object for debugging
            // Process the single object as needed
        }
    })
    .catch(error => {
        console.error("Error handling response:", error);
    });
};


  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <>
      {showPaymentModal && ( // Conditionally render payment modal
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <h2>Payment Details</h2>
              <form>
                <div className="input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="254"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="amount">Amount</label>
                  <input
                    id="amount"
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
                <button type="button" className="pay-button" onClick={pay}>
                  Donate
                </button>
              </form>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
      {showProcessing && <PaymentProcessing toggleModal={toggleModal} />}
    </>
  );
};

export default Payment;
