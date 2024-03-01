import React, { useState } from 'react';

const maxLength = 15;

export default function App() {
  const [message, setMessage] = useState('React.js');

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const style = { backgroundColor: message.length === maxLength ? 'red' : '' }
  return (
    <div>
      <h1>{message}</h1>
      <input type="text" value={message} onChange={handleChange} maxLength={maxLength} />
      <p
        style={style}
      >max {message.length}/{maxLength} character</p>
    </div>
  )
}
