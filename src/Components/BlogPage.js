import React, { useState } from 'react';
import '../css/BlogPage.css'; // Assuming you'll create Blog.css for styling

function Modal({ postData, onClose }) {
  const { imageUrl, date, message, assuranceMessage, additionalMessage } = postData;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={imageUrl} alt="Blog Post" className="modal-image" />
        <div className="date">{date}</div>
        <div className="message">
          <p>{message}</p>
          <p className="bold">{assuranceMessage}</p>
          <p>{additionalMessage}</p>
        </div>
      </div>
    </div>
  );
}

function BlogPage() {
  const [modalData, setModalData] = useState(null);

  const openModal = (postData) => {
    setModalData(postData);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const blogPosts = [
    {
      image: 'https://i.pinimg.com/originals/8e/45/a3/8e45a3f5b6ea56e0f659e96834428c83.jpg',
      date: '30Jun 2023',
      admin: 'Admin',
      message: 'Donation',
      assuranceMessage: 'We assure you that your donation will be used wisely.',
      additionalMessage: 'We understand that there are many people, organizations, seeking support.',
    },
    {
      image: 'https://i.pinimg.com/originals/94/b4/2e/94b42ebae881c33e6f7006bed128c7d0.jpg',
      date: '30Jun 2023',
      admin: 'Admin',
      message: 'Donation',
      assuranceMessage: 'We assure you that your donation will be used wisely.',
      additionalMessage: 'We understand that there are many people, organizations, seeking support.',
      },
      {
      image: 'https://i.pinimg.com/originals/40/9c/72/409c72206571b0769d5b185af0846c8c.jpg',
      date: '30Jun 2023',
      admin: 'Admin',
      message: 'Donation',
      assuranceMessage: 'We assure you that your donation will be used wisely.',
      additionalMessage: 'We understand that there are many people, organizations, seeking support.',
      },
      {
      image: 'https://i.pinimg.com/originals/a5/61/82/a56182e61fb97a55206f16895baf1085.jpg',
      date: '30Jun 2023',
      admin: 'Admin',
      message: 'Donation',
      assuranceMessage: 'We assure you that your donation will be used wisely.',
      additionalMessage: 'We understand that there are many people, organizations, seeking support.',
      },
      {
      image: 'https://i.pinimg.com/originals/75/f9/18/75f9187fbc44e2d7f7df8f57c64b4638.jpg',
      date: '30Jun 2023',
      admin: 'Admin',
      message: 'Donation',
      assuranceMessage: 'We assure you that your donation will be used wisely.',
      additionalMessage: 'We understand that there are many people, organizations, seeking support.',
      },
      {
      image: 'https://i.pinimg.com/originals/09/ce/9b/09ce9bdf1e40943b869ae0b759c0d914.jpg',
      date: '30Jun 2023',
      admin: 'Admin',
      message: 'Donation',
      assuranceMessage: 'We assure you that your donation will be used wisely.',
      additionalMessage: 'We understand that there are many people, organizations, seeking support.',
      },
      {
      image: 'https://i.pinimg.com/originals/47/b0/06/47b006f0c168c0cc2bc6eaff7e388baa.jpg',
      date: '30Jun 2023',
      admin: 'Admin',
      message: 'Donation',
      assuranceMessage: 'We assure you that your donation will be used wisely.',
      additionalMessage: 'We understand that there are many people, organizations, seeking support.',
      },
      {
      image: 'https://i.pinimg.com/originals/5c/a5/6e/5ca56ed1c1082392ffe9803cc7ad665d.jpg',
      date: '30Jun 2023',
      admin: 'Admin',
      message: 'Donation',
      assuranceMessage: 'We assure you that your donation will be used wisely.',
      additionalMessage: 'We understand that there are many people, organizations, seeking support.',
      },
      {
      image: 'https://i.pinimg.com/originals/97/db/63/97db63ab5abf2f60e78cb4824fee043d.jpg',
      date: '30Jun 2023',
      admin: 'Admin',
      message: 'Donation',
      assuranceMessage: 'We assure you that your donation will be used wisely.',
      additionalMessage: 'We understand that there are many people, organizations, seeking support.',
      },
	
  ];

  const blogPostComponents = blogPosts.map((post, index) => (
    <div key={index} className="blog-post">
      <img src={post.image} alt={`Blog Post ${index + 1}`} className="blog-image" />
      <div className="date">{post.date}</div>
      <button onClick={() => openModal(post)} className="open-modal-button">Open Modal</button>
    </div>
  ));

  return (
    <div className="blog-container">
      <div className="card-container">
        {blogPostComponents}
      </div>
      {modalData && (
        <Modal
          postData={modalData}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default BlogPage;