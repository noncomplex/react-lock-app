import React, { useState, useEffect } from 'react';

const Slot = (props) => {
  const {numValues, value} = props;
  const [slotValue, setSlotValue]  = useState(value);
  
  const increment = () => {
    if(slotValue > numValues - 2) {
      setSlotValue(0);
    }
    else {
      setSlotValue(slotValue + 1);
    }
  }
  const decrement = () => {
    if(slotValue < 1) {
      setSlotValue(numValues - 1);
    } else {
      setSlotValue(slotValue - 1);
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
