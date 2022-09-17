import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './src/navigation/AuthNavigator';
import HomeNavigator from './src/navigation/HomeNavigator';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/store/store';

const Contain = () => {
  const isUserSignedIn = useSelector(selectUserName);

  return (
    // check if user is signed in
    <NavigationContainer>
      {isUserSignedIn ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

function Router() {
  return (
    // wrapper for redux to work
    <Provider store={store}>
      <Contain />
    </Provider>
  );
}
export default Router;