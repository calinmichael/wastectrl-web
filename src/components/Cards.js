import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* Use a single ul element to contain all CardItems */}
          <ul className='cards__items'>
            <CardItem
              src='./images/prodshirt.jpeg'
              text=''
              label='Item'
              path='/shop'
            />
           
            
            
          
            </ul>
          
            
          
            
            
            
            
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
