import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'

import Profile from '../screens/Profile/Profile'
import EditProfile from '../screens/EditProfile'
import Theme from '../screens/Theme/Theme'

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  const theme = useSelector(state => state.theme.activeTheme)
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme === 'light' ? null : '#363636',
        },
        headerTitleStyle: {
          color: theme === 'light' ? 'white' : 'green',
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
        }}
        name="Theme"
        component={Theme}
      />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          title: 'Edit Profile',
        }}
        name="EditProfile"
        component={EditProfile}
      />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator