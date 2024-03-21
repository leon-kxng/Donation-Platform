import React, { useEffect } from 'react';
import '../css/BlogPagemodal.css'; // Import CSS for modal styling

function BlogPageModal({ post, onClose }) {
  // Close the modal when clicking outside of it
  const handleCloseOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose(); // Call onClose function passed as prop
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    document.addEventListener('mousedown', handleCloseOutside);
    return () => {
      document.removeEventListener('mousedown', handleCloseOutside);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <div className="modal" onClick={handleCloseOutside}>
      <div className="modal-content">
        {/* <span className="close" onClick={onClose}>&times;</span> */}
        <img src={post.image} alt="Blog Post" className="modal-blog-image" />
        <div className="modal-date">{post.date}</div>
        <div className="modal-admin-message-container">
          <div className="admin-symbol human-symbol">👤</div>
          <div className="modal-message">
            <span>By Admin</span>
          </div>
          <div className="messaging-symbol">💬</div>
          <div className="donation-message">
            <span>{post.message}</span>
          </div>
        </div>
        <div className="modal-message">
          <p className="bold">{post.assuranceMessage}</p>
          <p>{post.additionalMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPageModal;

