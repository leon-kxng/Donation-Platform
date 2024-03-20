import React from 'react';
import '../css/ContactPage.css'; // Import CSS file for styling

const ContactPage = () => {
  return (
    <>
      <div className="mini-header">
        {/* <img src="https://c7.alamy.com/comp/C041G1/thoughtful-young-poor-lower-caste-indian-street-girls-sisters-black-C041G1.jpg" alt="background-images"/> */}
        <button>Home</button><button>Contact Page</button>   
        <p>Contact Page</p>     
      </div>
    <div className="contact-container">
      <div className="form-container">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="info-container">
      <div className="info-text">
        <p><strong>Phone:</strong> 123-456-7890</p>
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Location:</strong> 123 Main St, City, Country</p>
        <p><strong>Office Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM</p>
        <p><strong>Social Media:</strong> <a href="https://www.facebook.com/example">Facebook</a>, <a href="https://twitter.com/example">Twitter</a>, <a href="https://www.instagram.com/example">Instagram</a></p>
        <p><strong>FAQs:</strong> <a href="/faq">Visit our FAQ page</a></p>
        <p><strong>Feedback Form:</strong> <a href="/feedback">Provide feedback</a></p>
        <p><strong>Team Members:</strong> <a href="/team">Meet our team</a></p>
        <p><strong>Newsletter:</strong> <a href="/newsletter">Subscribe to our newsletter</a></p>
        <p><strong>Business Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM</p>
        <p><strong>Company History:</strong> Learn more <a href="/about">about us</a></p>
        <p><strong>Testimonials:</strong> Read our <a href="/testimonials">testimonials</a></p>
        <p><strong>Privacy Policy:</strong> <a href="/privacy">View our privacy policy</a></p>
        <p><strong>Terms of Service:</strong> <a href="/terms">View our terms of service</a></p>
        <p><strong>Event Calendar:</strong> Check out our <a href="/events">events</a></p>
        <p><strong>Blog Feed:</strong> Read our latest <a href="/blog">blog posts</a></p>
        <p><strong>Product Catalog:</strong> Explore our <a href="/products">products</a></p>
      </div>

        <img className="info-image" src="https://c7.alamy.com/comp/M0RTRH/an-indian-landscape-i-found-when-working-with-the-seva-mandir-charity-M0RTRH.jpg" alt="Contact Info" />
      </div>
    </div>
   </>
  );
};

export default ContactPage;
