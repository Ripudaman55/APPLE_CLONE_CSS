import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const togglePopover = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  return (
    <>
        <div className='navbar'>
        {/* {!isPopoverVisible && ( */}
     <div className='d'>
        
        <a className="ass" href="">Store</a>
        <a href="j">Mac</a>
        <a href="g">iPad</a>
        <a href="f">iPhone</a>
        <a href="d">Watch</a>
        <a href="e">Vision</a>
        <a href="t">AirPods</a>
        <a href="e">TV & Home</a>
        <a href="t">Entertainment</a>
        <a href="y">Accessories</a>
        <a className="lll" href="">Support</a>
        
        
        <button className="menu-icon" onClick={togglePopover}>
        <i className="fa fa-bars"></i>
        </button>

        </div>
        {/* )} */}
        
        

      {isPopoverVisible && (
        <div className="popover">
          <a href="">Store</a>
          <a href="">Mac</a>
          <a href="">iPad</a>
          <a href="">iPhone</a>
          <a href="">Watch</a>
          <a href="">Vision</a>
          <a href="">AirPods</a>
          <a href="">TV & Home</a>
          <a href="">Entertainment</a>
          <a href="">Accessories</a>
          <a href="">Support</a>
        </div>
      )}
    </div>
      </>

  );
}

export default Navbar;
