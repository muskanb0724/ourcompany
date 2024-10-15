// src/Image1.js
import React from 'react';
import './Image1.css'; // Ensure you are importing the CSS file

const Image1 = () => {
    return (
        <div className="container">
            <h1>About WWS</h1>
            <h2>20+ Years Providing IT Solutions</h2>
            <p>
                At WWS, our commitment is to establish a business presence for each client and an international identity which can be recognized through our outstanding business services.
            </p>
           
            <div className="services">
                <h2>Our Services</h2>
                <div className="service-item">Personalize Services</div>
                <div className="service-item">Global Workforce</div>
                <div className="service-item">Free Consultations</div>
                <div className="service-item">User Experience</div>
                <div className="service-item">Big Data & Analytics</div>
                <div className="service-item">Quick Tips and Advice</div>
            </div>
            <p>
                WWS Inc. was able to connect Rogers with the appropriate contacts within the organizations to help develop new business relationships. Through WWS‘s support, a positive outcome for all parties involved was achieved.
            </p>
            <p>
                <strong>Syndi Pak</strong><br />
                COO – Temerity Analytics Inc.
            </p>
        </div>
    );
};

export default Image1;
