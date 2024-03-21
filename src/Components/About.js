import React from 'react';
import { BiSolidDonateHeart } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import { Ri24HoursFill } from "react-icons/ri";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import "./About.css";



function About() {
  const companyLogos = [
    'https://i.pinimg.com/236x/77/d6/70/77d670dc0d4c230d8f400845a8e59857.jpg',
    'https://i.pinimg.com/236x/86/a7/10/86a710d6e9e987e773e9251c69c507c0.jpg',
    'https://i.pinimg.com/236x/f9/bb/f0/f9bbf0df344f9ea59985fc1e56416ec8.jpg',
    'https://i.pinimg.com/236x/64/2d/8f/642d8f291e9f6e92a8aa668976d258e0.jpg',
    'https://i.pinimg.com/236x/1b/f3/40/1bf340e6810729a509b3bc95caebc27e.jpg',
    'https://i.pinimg.com/236x/ed/d3/59/edd3591496feef6997e61c297b0c6c31.jpg',
    'https://i.pinimg.com/236x/cb/d4/b2/cbd4b21e9dddd638ac4bce16d0353d2c.jpg',
    'https://i.pinimg.com/236x/02/08/24/0208240c3e32e21150ee1d0cccf91c2e.jpg',
    'https://i.pinimg.com/236x/b5/56/6c/b5566c63891b527f52aa79a3ab8d2725.jpg',
    // Add more logo URLs here as needed
  ];

  const volunteeringTeamMembers = [
    {
      name: 'Dwayne Johnson',
      role: 'Team Leader',
      photo: 'https://i.pinimg.com/236x/1b/d6/71/1bd671eeb2ab172e8b8fa0f80ad9722b.jpg',
    },
    {
      name: 'Oprah  Winfrey',
      role: 'Volunteer Coordinator',
      photo: 'https://i.pinimg.com/236x/31/96/79/31967979ca31e836deffb8482da9fc05.jpg',
    },
    // Add more team members here as needed
  ];

  const blogPosts = [
    {
      id: 1,
      imageUrl: 'https://example.com/blog1.jpg',
      title: 'Blog Post 1',
      description: 'This is the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      readMoreUrl: '#'
    },
    {
      id: 2,
      imageUrl: 'https://example.com/blog2.jpg',
      title: 'Blog Post 2',
      description: 'This is the second blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      readMoreUrl: '#'
    },
    {
      id: 3,
      imageUrl: 'https://example.com/blog3.jpg',
      title: 'Blog Post 3',
      description: 'This is the third blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      readMoreUrl: '#'
    },
    // Add more blog posts here as needed
  ];
  

  return (
    <div className="about-page">
      <div className="mini-header">
        <img />
        <button></button>
        <p></p>
      </div>

      <div className="about-us-container">

      <h1 className="about-us-title">About Us</h1>

    </div>

      <div className="about-cards-container">
        <div className="about-card">
          <BiSolidDonateHeart className="heart-icon" />
          <h3>Medical & Blood Donation</h3>
          <p>
            When deciding which charity to donate to, it's important to do your research.
          </p>
          <a href="#" className="read-more-link">
            Read More <GoArrowUpRight className="arrow-icon" />
          </a>
        </div>

        <div className="about-card">
          <Ri24HoursFill className="heart-icon" />
          <h3>Social Service</h3>
          <p>
            When deciding which charity to donate to, it's important to do your research.
          </p>
          <a href="#" className="read-more-link">
            Read More <GoArrowUpRight className="arrow-icon" />
          </a>
        </div>

        <div className="about-card">
          <LuCircleDollarSign className="heart-icon" />
          <h3>Send a Charitable</h3>
          <p>
            When deciding which charity to donate to, it's important to do your research.
          </p>
          <a href="#" className="read-more-link">
            Read More <GoArrowUpRight className="arrow-icon" />
          </a>
        </div>

        <div className="about-card">
          <FaBookOpen className="heart-icon" />
          <h3>Education</h3>
          <p>
            When deciding which charity to donate to, it's important to do your research.
          </p>
          <a href="#" className="read-more-link">
            Read More <GoArrowUpRight className="arrow-icon" />
          </a>
        </div>
      </div>

      <div className="about-section">
        <div className="about-details">
          <p className="about-1">About us</p>
          <p className="about-2">We Are Best Treatment For Our Hospita</p>
          <p className="about-3">When deciding which charity to donate to, it's important to do your search and find one that aligns with your values and interests.</p>
          <p className="about-3">When deciding which charity to donate to, it's important to do your search and find one that aligns with your values and interests.</p>

          <div class="donation-cards-container">
            <div class="donation-card">
              <div class="icon-container">
                <BiSolidDonateHeart class="icon" />
              </div>
              <div class="text-content">
                <p class="title">Make a Difference</p>
                <p class="description">Support programs that empower children to break free from poverty through vocational training.</p>
              </div>
              <button class="donate-button">Donate Now</button>
            </div>

            <div class="donation-card">
              <div class="icon-container">
                <BiSolidDonateHeart class="icon" />
              </div>
              <div class="text-content">
                <p class="title">Make a Difference</p>
                <p class="description">Support programs that empower children to break free from poverty through vocational training.</p>
              </div>
              <button class="donate-button">Donate Now</button>
            </div>

            <div class="donation-card">
              <div class="icon-container">
                <BiSolidDonateHeart class="icon" />
              </div>
              <div class="text-content">
                <p class="title">Make a Difference</p>
                <p class="description">Support programs that empower children to break free from poverty through vocational training.</p>
              </div>
              <button class="donate-button">Donate Now</button>
            </div>

            <div class="donation-card">
              <div class="icon-container">
                <BiSolidDonateHeart class="icon" />
              </div>
              <div class="text-content">
                <p class="title">Make a Difference</p>
                <p class="description">Support programs that empower children to break free from poverty through vocational training.</p>
              </div>
              <button class="donate-button">Donate Now</button>
            </div>
          </div>
          <button className="read-more-button">Read More</button>
        </div>
        <img src="" alt="Image should appear to the right of the about details" className="about-image"/>
      </div>

      <div className="company-logos">
      {companyLogos.map((logo, index) => (
        <img key={index} src={logo} alt={`Company Logo ${index + 1}`} />
      ))}
    </div>

    <div className="volunteering-team">
      <h2>Meet Our Volunteering Team</h2>
      <div className="team-members">
        {volunteeringTeamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="blog-section">
      <div className="blog-header">
        <h2 className="blog-header-small">Blog</h2>
        <h1 className="blog-header-large">Our Blog & Feeds</h1>
      </div>
      <div className="blog-cards">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <img src={post.imageUrl} alt={post.title} className="blog-card-image" />
            <div className="blog-card-content">
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-description">{post.description}</p>
              <a href={post.readMoreUrl} className="blog-card-readmore">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}

export default About;
