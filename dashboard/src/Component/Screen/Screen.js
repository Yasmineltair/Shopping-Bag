import React from 'react';
import './Screen.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow_icon.png';
import screen_image from '../Assets/screen_image3.png';


const Screen = () => {
  return (
    <div className='screen'>
      <div className='screen-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='screen-hand-icon'>
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className='screen-latest-button'>
          <div>Latest Collection</div>
          <img scr={arrow_icon} alt="" />
        </div>
      </div>
      <div className='screen-right'>
        <img src={screen_image} alt="" />
      </div>
    </div>
  )
}

export default Screen
