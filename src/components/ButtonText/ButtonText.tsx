import React, {useState} from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Logo } from '../../components/Logo/Logo';

import { styles } from './ButtonTextStyles';

export function ButtonText({aoClicar}) {
    return (
      <>
        <Logo />
        <TouchableOpacity>
          <Text
              style={styles.container}
              onPress={aoClicar}
          > ENVIAR BAT SINAL</Text>
        </TouchableOpacity>  
      </>
    );
  }