import { createContext, useState, useEffect } from "react";

const LockContext = createContext();

export const LockProvider = ({lockCombination, combination, setCombination, numValues, numSlots, isLocked, setIsLocked, children }) => {

  const changeSlotValue = (slotColumn, slotValue) => {
    combination.splice(slotColumn, 1, slotValue);
  };
  
  const unlock = () => {
    for(let i = 0; i < numSlots; i++) {
      if(combination[i] != lockCombination[i]) {
	setIsLocked(true);
	break;
      }
      if(i === numSlots - 1 && combination[i] === lockCombination[i]) {
	setIsLocked(false);
      }
    }
  }
  
  return (
      <>
      {isLocked ?  (
	  <LockContext.Provider value = {{ lockCombination, numValues, numSlots, combination, changeSlotValue, unlock }}>{children}
	</LockContext.Provider>) :
       <h1>unlocked</h1>}
    
      </>
  );
}

export default LockContext;
