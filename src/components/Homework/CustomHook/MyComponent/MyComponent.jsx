import React from 'react';
import useStorage from '../UseStroge';
import Button from '../../../../UA/Buttons/Button'
import './MyComponent.scss'

const MyComponent = () => {
  const [number, addToStorage, deleteNumber] = useStorage('number');

  
  const handleAddNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    addToStorage(randomNumber);
  };

  const handleDeleteNumber = () => {
    deleteNumber();
  };

  return (
    <div className='MyComponent'>
      <p>Number from localStorage: {number}</p>
      <Button title='Add Number'variant='dark' onclick={handleAddNumber} />
      <Button title='Delete Number' variant='dark' onclick={handleDeleteNumber}/>
    </div>
  );
};

export default MyComponent;
