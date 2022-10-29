import React from 'react';
import calculate from '../logic/calculate';
import '../style.css';
import KeyBtn from './Kyes';
// eslint-disable-next-line react/prefer-stateless-function
class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: null,
      next: null,
    };
  }

  EventHandler = (element) => {
    const btnName = element.keyTag;
    const res = calculate(this.state, btnName);
    this.setState(res);
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator">
        <div className="input-area">
          <div className="input">
            {total}
            {operation}
            {next}
          </div>
        </div>
        <div className="button-area">
          <KeyBtn onClickOperation={this.EventHandler} />
        </div>
      </div>
    );
  }
}

export default Calc;
