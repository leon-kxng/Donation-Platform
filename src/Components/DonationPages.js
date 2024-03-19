import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './DonationPages.css';

import CharityCard from './CharityCard';

function DonationPages() {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(12 / itemsPerPage);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const charityCards = [];
  for (let i = startIndex; i < endIndex; i++) {
    if (i < 12) {
      charityCards.push(<CharityCard key={i} />);
    } else {
      break;
    }
  }

  const renderPaginationItems = () => {
    const items = [];
    for (let index = 1; index <= totalPages; index++) {
      items.push(
        <Pagination.Item
          key={index}
          active={index === activePage}
          onClick={() => handlePageChange(index)}
          activeLabel = ""
        >
          {index}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <div className="donation-container">
      <p className="donation-message">
        Your generosity can make a difference! Join us in supporting these meaningful causes. Every contribution counts towards creating a brighter future for those in need.
      </p>
      <div className="card-container">
        {charityCards}
      </div>
      <div className="pagination-container">
        <CustomPagination activePage={activePage} totalPages={totalPages} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
}

const CustomPagination = ({ activePage, totalPages, handlePageChange }) => {
  const items = [];
  for (let index = 1; index <= totalPages; index++) {
    items.push(
      <Pagination.Item
        key={index}
        active={index === activePage}
        onClick={() => handlePageChange(index)}
        activeLabel = ""
      >
        {index}
      </Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
};

export default DonationPages;