import React, { useState, useContext, useEffect } from 'react';

import LockContext from '../contexts/LockContext';
import UnlockButton from '../components/UnlockButton';
import Slot from './Slot';

const Lock = () => {
  const { numValues, numSlots, combination } = useContext(LockContext);
  const slots = [];
  for(let i = 0; i < combination.length; i++) {
    slots.push(<Slot slotColumn={i} numValues={numValues} value={combination[i]}/>);
  }
  
  return (
  <>
    {slots}
    <UnlockButton/>
  </>);
}
export default Lock;
