import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import * as helpers from '../helpers';
import {
  AuthenticationContext,
  SET_TOKEN,
} from '../../../contexts/AuthenticationContext';
import { SigninPage } from './SigninPage';

jest.mock('../../../services/StorageService');
jest.mock('../helpers');

const withProviders = (
  element,
  initialRoute = '/signin',
  state = '',
  dispatch,
  isAuthenticated = false
) => (
  <MemoryRouter initialEntries={[initialRoute]}>
    <AuthenticationContext.Provider
      value={{ state, dispatch, isAuthenticated }}
    >
      {element}
    </AuthenticationContext.Provider>
  </MemoryRouter>
);

describe('testing SigninPage', () => {
  test('should render login button', async () => {
    jest
      .spyOn(helpers, 'redirectToAuthenticateOnSpotify')
      .mockImplementationOnce(() => {});

    const { baseElement, findByTestId } = render(withProviders(<SigninPage />));

    expect(baseElement).toMatchSnapshot();

    await act(async () => {
      fireEvent.click(await findByTestId('SigninPage-signin-button'));
    });

    expect(helpers.redirectToAuthenticateOnSpotify).toHaveBeenCalled();
  });

  test('should parser location hash and dispatch auth token', () => {
    const token = {
      token_type: 'TEST_TYPE',
      access_token: 'TEST_TOKEN',
    };
    jest.spyOn(helpers, 'getTokenFromHash').mockImplementationOnce(() => token);

    const hash = '#token_type=TEST_TYPE&access_token=TEST_TOKEN';

    const dispatch = jest.fn();

    render(withProviders(<SigninPage />, `/signin${hash}`, '', dispatch));

    expect(dispatch).toHaveBeenLastCalledWith({
      type: SET_TOKEN,
      payload: token,
    });
  });
});
