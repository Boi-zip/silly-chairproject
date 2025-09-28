'use client'
import Popup from 'reactjs-popup';
import { useState } from 'react';
import "./Css/Popup.css"
import 'animate.css'

export default function Popupcheckout(items) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 4000);
  }

  const start = () => {
    var audio = document.getElementById('a1');
    audio.play()
  }
  const [pricetotal, setPricetotal] = useState(0);
  function updateprice() { 
    setPricetotal(0)
    for (let i = 0; i < items.items.length; i++) {
    const element = items.items[i];
    setPricetotal(a => a + Number(element.price))
  }
  }
  
  
  
  return (
    <div>
       <audio id="a1" src="https://cdn.pixabay.com/download/audio/2022/12/17/audio_43e9af63f3.mp3?filename=cashier-quotka-chingquot-sound-effect-129698.mp3"></audio>
      <Popup onOpen={() => updateprice()} trigger={<button className="trigger-button">Checkout</button>} position="right center" modal nested>
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Simple checkout menu </div>
            <div className="content">
              {Object.entries(items.items).map(item => (
                <div>{item[1].text} <p className='price'>€ {item[1].price}</p></div>
                
              ))}
            </div>
            <div className="actions">
              <button className={`button animate__animated ${isActive && 'animate__hinge'}`} onClick={() => {
                start(); handleClick()
              }}>Buy all</button>
              <p className='price'>Total: €{pricetotal}</p>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}