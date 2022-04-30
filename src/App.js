import React from 'react';
import  { useState, useContext } from 'react';
import Lock from './components/Lock';
import UnlockButton from './components/UnlockButton';
import {LockProvider} from './contexts/LockContext';
import LockContext from './contexts/LockContext';
import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';

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
	<div className="Lock">
	  <Lock />
	</div>
	
	<div className="LockProvider">
	  <QuestionOne />
	  <QuestionTwo />
	</div>
	
      </LockProvider>
      </div>													  
  );
}

export default App;

