import React from 'react';
import { TextInput, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './FormulárioStyles';
import imageTopo from '../../../assets/logo2.png';

export function Formulario({aoVoltar}) {
  return (
    <View style={styles.container}>

        <Image style={styles.imageTop} source={imageTopo} />

        <TextInput style={styles.inputStyles} placeholder='Text' />
        <Text style={styles.labelText}>Label</Text>
        <TextInput  placeholder='Text' style={styles.inputStyles} />
        <Text style={styles.labelText}>Text area label</Text>
        <TextInput style={styles.inputArea}
            multiline={true} 
            numberOfLines={20}
            placeholder='Text'
             />
        <Text style={styles.labelText}>label</Text>
        <TextInput style={styles.inputArea}
            multiline={true} 
            numberOfLines={20}
            placeholder='Text'
             />
        <Text style={styles.labelText}>Abaixo existe um butão</Text>

        <TouchableOpacity>
          <Text style={styles.buttonText}
          onPress={aoVoltar}>
            Enviar
          </Text>
        </TouchableOpacity>
    </View>
  );
}