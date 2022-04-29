import React from 'react';
import  { useState, useContext } from 'react';
import Lock from './components/Lock';
import UnlockButton from './components/UnlockButton';
import {LockProvider} from './contexts/LockContext';
import LockContext from './contexts/LockContext';

function App() {
  const numValues = 21;
  const numSlots = 3;
  const [lockCombination, setLockCombination] = useState(Array.from({length: numSlots}, () => Math.floor(Math.random() * numValues)));
  const [combination, setCombination] = useState(Array.from({length: numSlots}, () => Math.floor(Math.random() * numValues)));
  const [isLocked, setIsLocked] = useState(true);
  
  return (
    <div className="App">
      <LockProvider numValues={numValues}
		    numSlots={numSlots}
		    lockCombination={lockCombination}
		    combination={combination}
		    setCombination={setCombination}
		    isLocked={isLocked}
		    setIsLocked={setIsLocked}>
	<Lock />
	<h4>Which has less permutations a 0-21 valued 3 combination lock (this one) or a 10 digit 4 combination lock?</h4>
	<h4>What is the difference in the number of permutations from the two locks described in the previous question?</h4>
      </LockProvider>
														  
    </div>
  );
}

export default App;
