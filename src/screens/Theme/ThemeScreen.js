import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { toggleTheme } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Theme/ThemeStyle';

const Theme = () => {
  const [isActive, setIsActive] = useState(false);
  const theme = useSelector(state => state.theme.activeTheme);
  const dispatch = useDispatch();

  console.log(theme);
  return (
    <View
      style={
        theme === 'light' ? styles.container_light : styles.container_dark
      }>
      <TouchableOpacity
        onPress={() => {
          setIsActive(!isActive);
          dispatch(toggleTheme());
        }}>
        <View style={styles.iconContain}>
          <View style={styles.icon}>
            {isActive ? (
              <Ionicons name="moon" size={80} color="black" />
            ) : (
              <Ionicons name="moon-outline" size={80} color="black" />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Theme;