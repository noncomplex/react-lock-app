import { useState, useContext } from 'react';
import LockContext from '../contexts/LockContext';

const QuestionOne = () => {
  const [correct, setCorrect] = useState(false);
  const { lockCombination } = useContext(LockContext);
  
  const onChange = (event) => {
    if(event.target.value === "(0-21) 3 combination") {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }
  
  return (
      <div onChange = {onChange}>
      <h4>Which has less permutations a 0-21 valued 3 combination lock (this one) or a 10 digit 4 combination lock?</h4>
      <input type="radio" value="(0-9) 4 combination"name="Q1"/>(0-9) 4 combination
      <input type="radio" value="(0-21) 3 combination" name="Q1"/>(0-21) 3 combination
    {correct ? (<h2>{`The first slot's value is ${lockCombination[0]}`}</h2>) : (null)}
    </div>
  );
}

export default QuestionOne;
