import React from 'react'
import './Pro.css'
import IMG from './pro.jpg'
function Pro() {
  return (
    <div className="imagepro">
        
        {/* <img src="https://orangedeals.ng/wp-content/uploads/2022/09/iphone-14-pro-finish-select-202209-6-1inch-deeppurple_AV2.jpg" alt="hlo" /> */}
        {/* <img src="https://images.squarespace-cdn.com/content/v1/55cb4361e4b08dc9aca88339/1662964925476-JQKXD8BOPJBDZ6LP9TH1/iPhone-14-Pro-Camera.jpg" alt="hlo" /> */}
    <img src= {IMG} alt="hlo" />
        <a className='image-text' href="a">iPhone 15 Pro</a>
        <a className='text' href="s">Titanium. So strong. So light. So Pro.</a>
        <a className="links"href="d">Learn more</a>
        <a className="linkbuy"href="f"> Buy</a>
    </div>
  )
}

export default Pro
