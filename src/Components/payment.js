import React from "react";
import "./payment.css";

const Payment = ({ toggleModal }) => {
  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <h2>Payment Details</h2>
          <form>
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="text" placeholder="254" />
            </div>
            <div className="input-group">
              <label htmlFor="amount">Amount</label>
              <input id="amount" type="text" placeholder="Amount" />
            </div>
            <button type="submit" className="pay-button">Pay</button>
          </form>
          <button className="close-modal" onClick={toggleModal}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;