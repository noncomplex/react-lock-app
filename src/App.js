import React from 'react';
import { useState } from 'react';
import Lock from './components/Lock';
import {LockProvider} from './contexts/LockContext';

function App() {
  const [isLocked, setIsLocked] = useState(false);  
  return (
    <div className="App">
      <LockProvider>
	<h1> Storeroom </h1>
	<Lock />
      </LockProvider>
    </div>
  );
}

export default App;
