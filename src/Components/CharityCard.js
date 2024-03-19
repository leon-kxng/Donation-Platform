import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { RiShareForwardFill } from "react-icons/ri";
import './CharityCard.css'; // Updated CSS file name

const CharityCard = () => {
  // Sample data for demonstration
  const goalAmount = 40000;
  const raisedAmount = 23404;

  const navigate = useNavigate();
  const handleClick = () => {
  navigate('/charityPage');
  };


  // Calculate the percentage of the goal achieved
  const progressPercentage = (raisedAmount / goalAmount) * 100;

  // State for controlling the progress bar
  const [progress, setProgress] = useState(0);

  // Animate the progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < progressPercentage ? prevProgress + 1 : prevProgress));
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [progressPercentage]);

  return (
    <div className="unique-charity-card" onClick={handleClick}> {/* Updated class name */}
      <img src="https://qph.cf2.quoracdn.net/main-qimg-9999e7cbd7d84e36c1021800fb6819f8-lq" className="card-img-top" alt="Card" onClick={handleClick}/>
      <div className="card-body">
        <p className="card-text h5">Lorem Ipsum</p>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ProgressBar 
          now={progress} 
          label={`${progress}%`} 
          variant="success" 
          className="mb-3 custom-progress-bar"
          style={{
            backgroundColor: '#C9EFE8',
            height: '11px',
            overflow: 'hidden',
          }}
          />
        <div className="d-flex justify-content-between">
          <p className="card-text">
            <strong>Goal:</strong> ${goalAmount}
          </p>
          <p className="card-text">
            <strong>Raised:</strong> ${raisedAmount}
          </p>
          <RiShareForwardFill className="share"/>
        </div>
        <Button variant="primary" className="mt-3" onClick={handleClick}>
          Donate Now
        </Button>
      </div>
    </div>
  );
};

export default CharityCard;