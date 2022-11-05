import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';

it('render to match the Calculator', () => {
  const calculator = render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  expect(calculator).toMatchSnapshot();
});
