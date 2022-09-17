import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useHeaderHeight } from '@react-navigation/elements'
import { authentication } from '../../firebase/firebase-config'
import { createUserWithEmailAndPassword } from "firebase/auth"

import styles from './Register.style'

const Register = () => {
  const headerHeight = useHeaderHeight()
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential)
      })
      .catch((error) => {
        // Error during authentication
        console.log(error)
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
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(username)}
          style={styles.input}
        />
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
        <TextInput
          placeholder="Password Again"
          value={passwordAgain}
          onChangeText={text => setPasswordAgain(text)}
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
          onPress={handleRegister}
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

export default Register
