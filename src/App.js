import React from 'react';
import Lock from './Lock';
import { LockOneContext } from './LockOneContext';
import { LockTwoContext } from './LockTwoContext';
function App() {
  
  const numValues = 21;
  const numSlots = 3;
 
  const combination = Array.from({length: numSlots}, () => Math.floor(Math.random() * numValues));
  const currentCombination =  Array.from({length: numSlots}, () => Math.floor(Math.random() * numValues));
  
  return (
    <div className="App">
      <h1> Storeroom </h1>
      <Lock numValues={numValues} numSlots={numSlots} combination={combination}/>
    </div>
  );
}

export default App;
