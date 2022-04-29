import { useState, useContext } from 'react';
import LockContext from '../contexts/LockContext';

// answer is 739
const QuestionTwo = () => {
  const [correct, setCorrect] = useState(false);
  const { lockCombination } = useContext(LockContext);
  const onChange = (event) => {
      if(event.target.value === "739") {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }
  return (
      <div onChange = {onChange}>
      <h4>What is the difference in the number of permutations from the two locks described in the previous question?</h4>
      <input />
      {correct ? (<h2>{`The second slot's value is ${lockCombination[1]}`}</h2>) : (null)}
    </div>
  );
}

export default QuestionTwo;
