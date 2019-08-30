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
      <button onClick={() => manageModal(!showModal)}>Show Modal</button>
      {
        showModal ? 
        (
          <Modal title={'React Portals'} onClose={() => onModalClose()} content={<div>
            Modal Content
          </div>}> 
            
          </Modal>
        ) : null
      }
    </div>
  );
}

export default App;
