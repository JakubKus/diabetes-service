import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders login and register links', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/login/i)).toBeInTheDocument();
  expect(getByText(/register/i)).toBeInTheDocument();
});

test('changes route to /login after click on nav link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const loginButton = getByText(/login/i);

  loginButton.click();

  expect(document.location.pathname).toBe('/login');
  expect(document.location.pathname).not.toBe('/');
});

test('route /login contains user name and password labels', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/login"]}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  const username = getByText(/Username/i);
  const password = getByText(/Password/i);

  expect(username).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});
