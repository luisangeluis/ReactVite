import { useState } from 'react';
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const plusOne = () => setCount(count + 1);
  const minusOne = () => setCount(count - 1);
  const resetCount = () => setCount(initialValue);

  // return { count, plusOne, minusOne, resetCount };
  return [count, plusOne, minusOne, resetCount];
};

export default useCounter;
