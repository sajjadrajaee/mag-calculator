import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('render to match the Navbar', () => {
  const navbar = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(navbar).toMatchSnapshot();
});
