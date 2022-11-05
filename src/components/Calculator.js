import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../style.css';
import KeyBtn from './Kyes';

const Calc = () => {
  const [state, setState] = useState({
    total: null,
    operation: null,
    next: null,
  });

  const EventHandler = (element) => {
    const btnName = element.keyTag;
    const res = calculate(state, btnName);
    setState(res);
  };

  const { total, operation, next } = state;
  return (
    <div className="main">
      <div className="letsdo">
        <span>Lets do some math!</span>
      </div>
      <div className="calculator">
        <div className="input-area">
          <div className="input">
            {total}
            {operation}
            {next}
          </div>
        </div>
        <div className="button-area">
          <KeyBtn onClickOperation={EventHandler} />
        </div>
      </div>
    </div>
  );
};

export default Calc;
