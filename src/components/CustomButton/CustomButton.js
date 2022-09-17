import { View, Button } from 'react-native';
import React from 'react';

import styles from './CustomButton.style'

const CustomButton = ({ title, onPress, disabled }) => {
  return (
    <View style={styles.button}>
      <Button
        title={title}
        onPress={onPress}
        disabled={disabled}
        color={'gray'}
      />
    </View>
  );
};

export default CustomButton;
