import React from 'react';
import './BlogPage.css'; 

function BlogPage() {
  // Dummy data for blog posts
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

  // Generate blog post components for all posts
  const blogPostComponents = blogPosts.map((post, index) => (
    <div key={index} className="blog-post">
      <img src={post.image} alt={`Blog Post ${index + 1}`} className="blog-image" />
      <div className="date">{post.date}</div>
      <div className="admin-message-container">
        <div className="admin-symbol human-symbol">👤</div>
        <div className="admin-message">
          <span>By Admin</span>
        </div>
        
        <div className="messaging-symbol">💬</div>
        <div className="donation-message">
          <span>Donation</span>
        </div>
      </div>
      <div className="message">
        <p>{post.message}</p>
        <p className="bold">{post.assuranceMessage}</p>
        <p>{post.additionalMessage}</p>
      </div>
      <a href="#" className="read-more">Read More</a>
    </div>
  ));

  return (
    <div className="blog-container">
      <div className="card-container">
        {blogPostComponents}
      </div>
    </div>
  );
}

export default BlogPage;

