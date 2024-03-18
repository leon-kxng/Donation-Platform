import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './DonationPages.css';

import CharityCard from './CharityCard';

function DonationPages() { // Corrected component name to DonationPages
  // Pagination state
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 6; // Number of items per page
  const totalPages = Math.ceil(12 / itemsPerPage); // Total number of pages (assuming 12 items)

  // Handle page change
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  // Calculate start and end indexes for current page
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Generate CharityCard components for current page
  const charityCards = [];
  for (let i = startIndex; i < endIndex; i++) {
    if (i < 12) { // Assuming there are 12 charity cards in total
      charityCards.push(<CharityCard key={i} />);
    } else {
      break; // Break if we reach the end of available cards
    }
  }

  return (
    <div className="donation-container">
      <p className="donation-message">
        Your generosity can make a difference! Join us in supporting these meaningful causes. Every contribution counts towards creating a brighter future for those in need.
      </p>
      <div className="card-container">
        {charityCards}
      </div>
      {/* Pagination */}
      <div className="pagination-container">
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === activePage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
}

export default DonationPages;

