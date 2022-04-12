import React from 'react';
import Popup from 'reactjs-popup';
import '../../assets/css/pop.scss'
export const Pop = () => (

    <Popup trigger={<button className="button"> Open Modal </button>} modal  nested>
      
      <span style={{background:'red'}}>ffffff</span>
    </Popup>
  
);