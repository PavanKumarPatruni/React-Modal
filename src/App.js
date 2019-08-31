import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {

  let [ showModal, manageModal ] = useState(false);

  const onModalClose = () => {
    manageModal(!showModal);
  }

  return (
    <div className="App">
      <button className="margin-auto" onClick={() => manageModal(!showModal)}>Show Modal</button>
      {
        showModal ? 
        (
          <Modal title={'Login'} onClose={() => onModalClose()} width={500}>
            <div className="login-form">
              <input type="email" placeholder="Email" className="text-input"/>
              <input type="password" placeholder="Password" className="text-input"/>
              <button className="login-button">Login</button>
              <div className="login-buttons">
                <button className="login-button signup-button">Forgot password?</button>
                <button className="login-button signup-button">Create Account</button>
              </div>
            </div>
          </Modal>
        ) : null
      }
    </div>
  );
}

export default App;
