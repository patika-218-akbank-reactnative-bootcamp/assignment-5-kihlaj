import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Search from '../screens/SearchScreen/Search';
import ProfileStackNavigator from './ProfileStackNavigator';

const BottomTabs = createBottomTabNavigator();

const BottomNavigator = () => {
  const theme = useSelector(state => state.theme.activeTheme);
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabelStyle: { color: theme === 'light' ? 'white' : 'green' },
      }}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShadowVisible: false,
          tabBarLabel: 'Movies',
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name={`movie-star${focused ? '' : '-outline'}`}
              color={theme === 'light' ? 'white' : 'green'}
              size={size + 5}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShadowVisible: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={`search${focused ? '' : '-outline'}`}
              color={theme === 'light' ? 'white' : 'green'}
              size={size + 5}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShown: false,
          headerShadowVisible: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={`settings${focused ? '' : '-outline'}`}
              color={theme === 'light' ? 'white' : 'green'}
              size={size + 5}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;