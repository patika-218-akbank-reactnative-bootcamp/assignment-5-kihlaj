import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../screens/Search';
import BottomNavigator from './BottomNavigator.js';

const HomeNavigator = () => {
  const Movie = createNativeStackNavigator();

  return (
    <Movie.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Movie.Screen name="BottomNavigator" component={BottomNavigator} />
      <Movie.Screen
        options={{
          headerShown: true,
        }}
        name="MovieDetails"
        component={Search}
      />
    </Movie.Navigator>
  );
};

export default HomeNavigator;