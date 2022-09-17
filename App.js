import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SignUp from './screens/auth/SignUp'
import SignIn from './screens/auth/SignIn'

const Stack = createStackNavigator()

const Router = () => {
  let isSignedIn = false;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ?
          <Stack.Group>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={({ route }) => ({
                headerStyle: { backgroundColor: '#0088CC' },
                headerTintColor: 'white',
                headerTitle: route.params.chatName,
                headerShadowVisible: false,
                headerBackVisible: true,
                headerLeft: () => (
                  <Image
                    source={{ uri: route.params.receiver.image }}
                    style={styles.image}
                  />
                ),
                headerRight: () => (
                  <Icon name="dots-vertical" size={25} color="white" />
                ),
              })}
            />
            <Stack.Screen
              name="Theme"
              component={Theme}
              options={({ route }) => ({
                headerStyle: { backgroundColor: '#0088CC' },
                headerTintColor: 'white',
                headerTitle: 'Select Theme',
                headerShadowVisible: false,
              })}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={({ route }) => ({
                headerStyle: { backgroundColor: '#0088CC' },
                headerTintColor: 'white',
                headerTitle: 'Edit Profile',
                headerShadowVisible: false,
              })}
            />
          </Stack.Group>
          :
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Group>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router