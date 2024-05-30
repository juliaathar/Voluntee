import { AntDesign } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ConteinerGeral } from '../../components/Container/Style'
import { Input } from '../../components/Input/Input';
import { ConteinerBolaMenor, ConteinerBolaMaior, ConteinerIcon } from './Style';

export const Cadastro = () => {

  return (
    <View style={styles.container}>

      <ConteinerBolaMenor>
        <ConteinerIcon>
          <AntDesign name="left" size={26} color="#0066FF" z-index='1' />
        </ConteinerIcon>
      </ConteinerBolaMenor>

      <ConteinerBolaMaior>

      </ConteinerBolaMaior>

      <ConteinerGeral>

        <Input
          alter
          icon='user-large'
        >
        </Input>

        <Input
          alter
          icon='calendar'
        >
        </Input>

        <Input
          alter
          icon='contact-card'
        >
        </Input>

        <Input
          alter
          icon='envelope'
        >
        </Input>

        <Input
          alter
          icon='eye-slash'
        >
        </Input>

        <Input
          alter
          icon='eye-slash'
        >
        </Input>

      </ConteinerGeral>

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
