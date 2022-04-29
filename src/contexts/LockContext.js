import { createContext, useState } from "react";

const LockContext = createContext();

export function LockProvider({ children }) {
  const numValues = 21;
  const numSlots = 3;
  
  const [combination, setCombination] = useState(Array.from({length: numSlots}, () => Math.floor(Math.random() * numValues)));

  const changeSlotValue = (slotColumn, slotValue) => {
    combination[slotColumn] = slotValue;
    console.log(combination);
  };
  
  return (
      <LockContext.Provider value = {{ numValues, numSlots, combination, changeSlotValue }}>{children}</LockContext.Provider>
  );
}

export default LockContext;
