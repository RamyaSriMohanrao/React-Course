import React from 'react';
import { useState } from 'react';

const Notification = (message, onClose) => {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
        {message}
        <button onClick={onClose} className="ml-4 bg-red-500 px-2 rounded"> ❌ </button>
    </div>
  )
}

export default Notification;