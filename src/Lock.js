import React, { useState } from 'react';
import Slot from './Slot';

const Lock = (props) => {
  const { numValues, numSlots, combination} = props;
  const slots = [];
  for(let i = 0; i < combination.length; i++) {
    slots.push(<Slot numValues={numValues} value={combination[i]}/>);
  }
  
  return (
  <React.Fragment>
    {slots}
  </React.Fragment>);
}
export default Lock;
