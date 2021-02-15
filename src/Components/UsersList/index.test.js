import React from 'react';
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import UsersList from './index.js';
import store from "../../store/store.js";

describe('Render a post', () => {
  function renderUsers() {
    return render(
      <Provider store={store} >
        <UsersList enableSearch={true} />
      </Provider>
    );
  };

  it('render Loading...', async () => {
    renderUsers();
    expect(screen.getByTestId('loading')).toHaveTextContent('Loading Users...');
    await waitForElementToBeRemoved(() => screen.getByText('Loading Users...'));
  });

  it('render users', async () => {
    renderUsers();
    await waitForElementToBeRemoved(() => screen.getByText('Loading Users...'));
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
  });

  it('search users', async () => {
    renderUsers();
    await waitForElementToBeRemoved(() => screen.getByText('Loading Users...'),{ timeout: 1000 });
    expect(screen.queryByText('Leanne Graham')).toBeInTheDocument();
    const input = screen.getByTestId('search');
    await userEvent.type(input, 'Clem');
    expect(screen.getByText('Clementine Bauch')).toBeInTheDocument();
    expect(screen.queryByText('Leanne Graham')).not.toBeInTheDocument();
  });

  it('render posts', async () => {
    renderUsers();
    await waitForElementToBeRemoved(() => screen.getByText('Loading Users...'));
    const testDataSearch = screen.queryByText('Clementine Bauch');
    await fireEvent.click(testDataSearch);
    expect(screen.getByTestId('loading')).toHaveTextContent('Loading Posts...');
    await waitForElementToBeRemoved(
      () => screen.queryByText('Loading Posts...'), { timeout: 10000 }
    );
    expect(screen.getByText('dolor sint quo a velit explicabo quia nam')).toBeInTheDocument();
  });
});