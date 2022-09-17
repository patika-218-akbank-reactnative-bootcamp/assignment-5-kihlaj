import { View, Text, Image } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import CustomButton from '../../components/CustomButton'
import styles from '../Profile/ProfileStyle'
import { authentication } from '../../firebase/firebase-config'
import { setUserLogOutState } from '../../store/store'

const Profile = () => {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()

  const userInRedux = useSelector(state => state.user.user)
  const theme = useSelector(state => state.theme.activeTheme)

  const handleSignOut = () => {
    authentication.signOut().then(() => {
      dispatch(setUserLogOutState())
    }).catch((err) => alert(err.message))
  }

  return (
    <View
      style={
        theme === 'light' ? styles.container_light : styles.container_dark
      }>
      <Image
        style={styles.image}
        source={{
          uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQHE1uR4C8lAUw/profile-displayphoto-shrink_800_800/0/1660657994960?e=1668643200&v=beta&t=AQ29hII6_9TgdYTUknxYAMR9wkc9aJqLQZHN9T5MGPQ',
        }}
      />
      <Text style={styles.usernameText}>username:{userInRedux.username}</Text>
      <CustomButton
        title={'Theme'}
        onPress={() => {
          navigate('Theme');
        }}
      />
      <CustomButton
        title={'Edit Profile'}
        onPress={() => {
          navigate('EditProfile');
        }}
      />
      <CustomButton
        title={'Logout'}
        onPress={handleSignOut}
      />
    </View>
  );
};

export default Profile;