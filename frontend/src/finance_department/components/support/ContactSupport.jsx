import React, { useState } from 'react';
import './ContactSupport.scss';

const ContactSupport = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send message to support
    // Placeholder for API call
    setStatus('Your message has been sent!');
  };

  return (
    <div className="contact-support">
      <h1>Contact Support</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here"
          rows="5"
        />
        <button type="submit">Send</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default ContactSupport;
