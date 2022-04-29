import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import LockContext from '../contexts/LockContext';

const Slot = (props) => {
  const { slotColumn, numValues, value } = props;
  const { changeSlotValue } = useContext(LockContext);
  const [slotValue, setSlotValue]  = useState(value);
  
  const increment = () => {
    if(slotValue > numValues - 2) {
      setSlotValue(0);
      changeSlotValue(slotColumn, 0);
    }
    else {
      setSlotValue(slotValue + 1);
      changeSlotValue(slotColumn, slotValue + 1); 
    }
  }
  const decrement = () => {
    if(slotValue < 1) {
      setSlotValue(numValues - 1);
      changeSlotValue(slotColumn, numValues - 1); 
    } else {
      setSlotValue(slotValue - 1);
      changeSlotValue(slotColumn, slotValue - 1); 
    }
  }
  
  return (
    <>
      <button onClick={increment}>⬆️</button>
      <h1>{slotValue}</h1>
      <button onClick={decrement}>⬇️</button>
    </>
  );
}

export default Slot;
