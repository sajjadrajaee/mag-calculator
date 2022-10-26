import React from 'react';
import '../style.css';
// eslint-disable-next-line react/prefer-stateless-function
class Calc extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="input-area">
          <input type="text" className="input" placeholder="0" />
        </div>
        <div className="button-area">
          <div className="first-row">
            <button type="button" className="button">AC</button>
            <button type="button" className="button">+/-</button>
            <button type="button" className="button">%</button>
            <button type="button" className="button-symbol">÷</button>
          </div>
          <div className="second-row">
            <button type="button" className="button">7</button>
            <button type="button" className="button">8</button>
            <button type="button" className="button">9</button>
            <button type="button" className="button-symbol">x</button>
          </div>
          <div className="third-row">
            <button type="button" className="button">4</button>
            <button type="button" className="button">5</button>
            <button type="button" className="button">6</button>
            <button type="button" className="button-symbol">-</button>
          </div>
          <div className="fourth-row">
            <button type="button" className="button">1</button>
            <button type="button" className="button">2</button>
            <button type="button" className="button">3</button>
            <button type="button" className="button-symbol">+</button>
          </div>
          <div className="fifth-row">
            <button type="button" className="zero">0</button>
            <button type="button" className="button">.</button>
            <button type="button" className="button-symbol">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
