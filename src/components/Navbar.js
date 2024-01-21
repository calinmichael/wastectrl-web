import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import cart_icon from '../images/cart_icon.jpg';






function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (()=>{
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick =
            {closeMobileMenu}>
                
         |........
             
              
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <li className='nav-item'>
                    <Link to='/mission' className='nav-links' onClick={closeMobileMenu}>
                        Our Mission
                    </Link>
                </li>
                
                <li className='nav-item'>
                    <Link to='https://wastectrl.myshopify.com/' className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                
                
                
                
            </ul>
            {button && <Button buttonStyle='btn--outline' to='https://wastectrl.myshopify.com/'>Shop Now</Button>}
            
            </div> 
      </nav>
    </>
  )
}

export default Navbar

