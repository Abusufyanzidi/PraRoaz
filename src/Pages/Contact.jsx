import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-container">
     <h2 className='heading-h2'>Contact Us</h2>
      <p className='pp'>Have questions or need assistance? Reach out to us!</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
