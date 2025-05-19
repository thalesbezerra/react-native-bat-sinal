import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './LogoStyles';
import LogoSinal from '../../../assets/logo.png';

export function Logo() {
  return (
    <View style={styles.container}>
        <Image 
            source={LogoSinal}
        />
    </View>
  );
}