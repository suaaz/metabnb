import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineRight } from "react-icons/ai";
import Modal from 'react-modal'

export default function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
    <div className='navbar'>
      <div className="logo">
          <img className="logo_img" src={require('./logo_img.png')} alt="Logo" />
          <img className="logo_txt" src={require('./logo_text.png')} alt="Logo" />
      </div>
      
      <div className="hamburger">
        <input id='menu-toggle' className='menu-toggle' type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
          <div className='menu-button'><GiHamburgerMenu size={40}/></div>
        </label>
        <div className="links">
          <Link className='lin' to='/'>Home</Link>
          <Link className='lin' to='/place_to_stay'>Place to stay</Link>
          <Link className='lin' to='#'>NFTs</Link>
          <Link className='lin' to='#'>Community</Link> 
          <button onClick={() => setModalIsOpen(true)} className='bbtn open-button'>Connect Wallet</button>
        </div>
      </div>
      <button  id='modal-button' onClick={() => setModalIsOpen(true)}  className='alt_button bbtn open-button'>Connect Wallet</button>
      <Modal className='new_modal'  isOpen={modalIsOpen} onRequestClose = {() => setModalIsOpen(false)} >
      <div id='my-modal' className="modal overlay">
        <div className="top_modal">
          <h3>Connect Wallet</h3>
          <button onClick={() => setModalIsOpen(false)} className="close-button " >&times;</button>
        </div>
        <div className="line"></div>
        <div className="lower_modal">
          <p>Choose your preferred wallet:</p>
          <div className="sub_modal">
            <div className="mm">
              <img src={require('./modal1.png')} alt="img" />
              <p>Metamask</p>
            </div>
            <AiOutlineRight/>
          </div>
          <div className="sub_modal">  
            <div className="mm">
              <img src={require('./modal2.png')} alt="img" />
              <p>WalletConnect</p>
            </div>              
            <AiOutlineRight/>
          </div>
        </div>
      </div>
      </Modal>
      
    </div>
    </>
  )
  
}
