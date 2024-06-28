// src/Toast.js
import React from 'react';

const Toast = ({ show, message, onClose }) => {
  return (
    <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show ? 'show' : ''}`} style={{ zIndex: 9999 }}>
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">Notification</strong>
          <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Toast;
