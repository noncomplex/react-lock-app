import { useContext } from 'react';
import LockContext from '../contexts/LockContext';


const UnlockButton = () => {
  const { unlock } = useContext(LockContext);
  
  return (
      <button onClick={unlock}>unlock</button>
  );
}

export default UnlockButton;
