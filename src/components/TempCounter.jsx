import { useState } from 'react';
import PropTypes from 'prop-types';

const TempCounter = ({ name, count: initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const changeCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <h1>Hello {name}</h1>
      <h3>{count}</h3>
      <p>Click the button below to increase the counter</p>
      <button onClick={changeCount}>Click Me</button>
    </>
  );
};

TempCounter.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default TempCounter;
