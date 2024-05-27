import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from './src/components/Botao/Botao';
import { Titulo } from './src/components/Titulo/Titulo';

export default function App() {
  return (
    <View style={styles.container}>

      <Titulo>Descubra campanhas solidárias perto de você.</Titulo>

        <Button>
          <Text>Pular</Text>
        </Button>

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
