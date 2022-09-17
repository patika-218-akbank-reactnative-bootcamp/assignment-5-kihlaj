import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigaiton/AuthNavigator';
import HomeNavigator from './navigaiton/HomeNavigator';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';

const Contain = () => {
  const isUserSignedIn = useSelector(selectUserName);

  return (
    <NavigationContainer>
      {isUserSignedIn ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

function Router() {
  return (
    <Provider store={store}>
      <Contain />
    </Provider>
  );
}
export default Router;