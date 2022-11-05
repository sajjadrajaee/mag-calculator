import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

it('render to match the Home', () => {
  const home = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  expect(home).toMatchSnapshot();
});
