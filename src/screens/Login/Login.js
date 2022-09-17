import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useHeaderHeight } from '@react-navigation/elements'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useDispatch, useSelector } from 'react-redux'

import { authentication } from '../../firebase/firebase-config'
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from '../../store/store'

import styles from './Login.style'

const Login = () => {
  const headerHeight = useHeaderHeight()
  const dispatch = useDispatch()

  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(authentication, email, password)
      .then((result) => {
        dispatch(setActiveUser({
          // following is the action payload
          userName: result.user.displayName,
          userEmail: result.user.email
        }))
      })
      .catch((error) => {
        // Error during authentication
        alert(error.message)
      })
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight - 150}
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => { }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView >
  )
}

export default Login
