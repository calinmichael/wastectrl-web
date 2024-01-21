import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dlaxrfi', 'template_bn01m9h', form.current, '5XiZEywcEhUTRxvZe')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact'>
      <div className='header'>
        <h1>Send Us A Message Regarding Any Questions or Concerns!</h1>

    <form ref={form} onSubmit={sendEmail}>
    <label>Your Name</label>
    <input type="text" name="user_name" />
    <label>Your Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
  </div>
  </div>
  )
}

export default Contact
