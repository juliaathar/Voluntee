import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Botao } from './src/components/Botao/Botao';
import { Titulo } from './src/components/Titulo/Titulo';
import { Input } from './src/components/Input/Input';

export default function App() {
  return (
    <View style={styles.container}>

      <Titulo>Descubra campanhas solidárias perto de você.</Titulo>

        <Botao
          textoBotao='aaaaaaa'
          //alter
        />
        <Input
          placeholder={"aaaaaaaaaaaaaaaaa"}
          //alter
        />

        <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
