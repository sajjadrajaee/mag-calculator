import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../components/Quote';

it('render to match the Quote', () => {
  const quote = render(
    <BrowserRouter>
      <Quote />
    </BrowserRouter>,
  );
  expect(quote).toMatchSnapshot();
});
