import React, {useState} from 'react';
import { View,Text } from 'react-native';
import { styles } from './HomeStyles';
import { ButtonText } from '../../components/ButtonText/ButtonText';
import { Formulario } from '../../components/Formulario/Formulario';

export function Home() {

  const [telaAtual, setTelaAtual] = useState('inicial');

  return (
    <View style={styles.container}>
      {telaAtual === 'inicial' ? (
        <ButtonText aoClicar={() => setTelaAtual('formulario')} />
      ) : (
        <Formulario aoVoltar={() => setTelaAtual('inicial')} />
      )}
    </View>
  );
}