import React from 'react';



const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="service-card">
        <img
          src="service1.jpg"
          alt="Service 1"
          className="service-image"
        />
        <h2>Service 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla nec justo eget urna faucibus ornare at sit amet ex.
        </p>
      </div>
      <div className="service-card">
        <img
          src="service2.jpg"
          alt="Service 2"
          className="service-image"
        />
        <h2>Service 2</h2>
        <p>
          Ut bibendum ligula a libero laoreet, non lacinia ex
          vulputate. Sed quis tortor vel metus volutpat dapibus
          vitae sit amet sapien.
        </p>
      </div>
      <div className="service-card">
        <img
          src="service3.jpg"
          alt="Service 3"
          className="service-image"
        />
        <h2>Service 3</h2>
        <p>
          Fusce eget odio et purus aliquam malesuada.
          Suspendisse potenti. Sed vel libero vel felis semper
          hendrerit eget a ante.
        </p>
      </div>
    </div>
  );
};

export default Services;
