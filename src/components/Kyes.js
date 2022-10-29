import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
const KeyBtn = (props) => {
  const data = [
    { keyTag: 'AC' },
    { keyTag: '+/-' },
    { keyTag: '%' },
    { className: '-symbol', keyTag: '÷' },
    { keyTag: '7' },
    { keyTag: '8' },
    { keyTag: '9' },
    { className: '-symbol', keyTag: 'x' },
    { keyTag: '4' },
    { keyTag: '5' },
    { keyTag: '6' },
    { className: '-symbol', keyTag: '-' },
    { keyTag: '1' },
    { keyTag: '2' },
    { keyTag: '3' },
    { className: '-symbol', keyTag: '+' },
    { className: '-zero', keyTag: '0' },
    { keyTag: '.' },
    { className: '-symbol', keyTag: '=' },
  ];
  return (
    data.map((btn) => (
      <button
        type="button"
        onClick={() => props.onClickOperation(btn)}
        key={btn.keyTag}
        className={`button${btn.className === undefined ? '' : btn.className}`}
      >
        {btn.keyTag}

      </button>
    ))
  );
};

export default KeyBtn;
