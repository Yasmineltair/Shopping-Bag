import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>Our website offers a seamless and intuitive interface, allowing you to effortlessly browse through a wide array of products. If you're searching for the latest fashion trends our carefully curated selection ensures you'll find exactly what you need. Enjoy exclusive deals, fast shipping, and exceptional customer service, making your shopping journey delightful and stress-free. 
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox;
