// OurCompany.js
import React from 'react';
import './Image1.css'; // Import your CSS file

function OurCompany() {
    return (
        <div className="container">
            <div className="about-us">About Us</div>
            <h2>20+ Years Providing IT Solutions</h2>
            <p>
                At WWS, our commitment is to establish a business presence for each client and an international identity
                which can be recognized through our outstanding business services.
            </p>
            {/* Services Heading Card */}
            <div className="services-heading">Our Services</div>
            <div className="services">
                <div className="service-item">Personalized Services</div>
                <div className="service-item">Global Workforce</div>
                <div className="service-item">Free Consultations</div>
                <div className="service-item">User Experience</div>
                <div className="service-item">Big Data & Analytics</div>
                <div className="service-item">Quick Tips and Advice</div>
            </div>
            <p>
                WWS Inc. was able to connect Rogers with the appropriate contacts within the organizations to help develop new
                business relationships. Through WWS‘s support, a positive outcome for all parties involved was achieved.
            </p>
            <p><strong>Syndi Pak</strong></p>
            <p>COO – Temerity Analytics Inc.</p>
        </div>
    );
}

export default OurCompany;
