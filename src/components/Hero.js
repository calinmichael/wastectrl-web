import React from 'react';
import './Hero.css';
import '../App.css';
import {Button} from './Button';
import { Link } from 'react-router-dom';

function Hero() {

  return (
    
    
    <div className='hero-container'>
    
       
      <h1>Waste CTRL </h1>{/* Heading */}
  

      <div className='hero-btns'>
        <Button 
        to='https://wastectrl.myshopify.com/'
        className='hero-btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            Shop Now
        </Button> {/* Button component */}
        
        <Button 
        to='/mission'
        className='hero-btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
            Learn More
        </Button>
       
        
        
      </div>
    </div>
  )
}

export default Hero