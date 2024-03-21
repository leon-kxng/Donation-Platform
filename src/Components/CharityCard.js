import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar, Button, Spinner } from 'react-bootstrap';
import { RiShareForwardFill } from "react-icons/ri";
import '../css/CharityCard.css'; // Updated CSS file name

const CharityCard = ({ charity }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
      
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [charity]);

    return (
      
      <>
      
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="unique-charity-card">
          <img src={charity.image_url} className="card-img-top" alt="Card"/>
          <div className="card-body">
            <p className="card-text h5">{charity.name}</p>
            <p className="card-text">{charity.mission}</p>
            <ProgressBar
              now={(charity.raised / charity.goal) * 100}
              label={`${Math.ceil(((charity.raised / charity.goal) * 100)).toFixed(2)}%`}
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
                <strong>Goal:</strong> ${Math.ceil(charity.goal)}
              </p>
              <p className="card-text">
                <strong>Raised:</strong> ${Math.ceil(charity.raised)}
              </p>
              <RiShareForwardFill className="share"/>
            </div>
            <Link to={`/charityPage/${charity.charity_id}`}>
            <Button variant="primary" className="mt-3">
              Donate Now
            </Button>
          </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CharityCard;