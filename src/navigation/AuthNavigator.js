import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/Register';
import Login from '../screens/Login';

const AuthNavigaiton = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="SignIn" component={Login} />
      <AuthStack.Screen
        options={{
          headerShown: true,
        }}
        name="SignUp"
        component={Register}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigaiton;