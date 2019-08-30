import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({content, title, onClose}) => {

    console.log(content);

    return (
        ReactDOM.createPortal(
        <div className="modal-view">
            <div className="modal">
            <div className="modal-header">
                <div className="modal-title">{title}</div>
                <button className="modal-close" onClick={onClose}>X</button>
            </div>
            <div className="modal-content">
                { content }
            </div>
        </div>
       </div>, document.getElementById('root'))
    );

}

export default Modal;

