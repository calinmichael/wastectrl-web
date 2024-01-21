import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
       
        <div className='input-areas'>
          
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>about us</h2>
            <Link to='/mission'>mission</Link>
          </div>
          <div class='footer-link-items'>
            <h2>contact us</h2>
            <Link to='/contact'>contact</Link>
          </div>
        </div>
        </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              WasteCtrl
              <i class='fas fa-wine-bottle' />
            </Link>
          </div>
          <small class='website-rights'>Waste CTRL © 2023</small>
          <div class='social-icons'>
            
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/waste_ctrl?igsh=MTZxZXIyejUxdmxkcg%3D%3D&utm_source=qr'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link tiktok'
              to='https://www.tiktok.com/@wastectrl'
              target='_blank'
              aria-label='TikTok'
            >
              <i class='fab fa-tiktok' />
            </Link>
            
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;