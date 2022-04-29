import React, { useState } from 'react';
import { useContext } from 'react';
import LockContext from '../contexts/LockContext';
import Slot from './Slot';

const Lock = () => {
  const { numValues, numSlots, combination } = useContext(LockContext);
  const slots = [];
  for(let i = 0; i < combination.length; i++) {
    slots.push(<Slot slotColumn={i} numValues={numValues} value={combination[i]}/>);
  }
  
  return (
  <React.Fragment>
    {slots}
  </React.Fragment>);
}
export default Lock;
