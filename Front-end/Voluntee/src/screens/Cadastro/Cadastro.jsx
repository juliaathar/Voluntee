console.disableYellowBox = true;

import { AntDesign } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ConteinerButton, ConteinerCadastro, ConteinerGeral, ConteinerLink } from '../../components/Container/Style'
import { Input } from '../../components/Input/Input';
import { ConteinerBolaMenor, ConteinerBolaMaior, ConteinerIcon } from './Style';
import { TituloH2 } from '../../components/Titulo/Style';
import { Botao } from '../../components/Botao/Botao';
import { Link, TextLink } from '../../components/Link/Link';
import { Paragrafo } from '../../components/Paragrafo/Style';

export const Cadastro = (navigate) => {
  console.disableYellowBox = true;

  return (
    <View style={styles.container}>

      <ConteinerBolaMenor>
        <ConteinerIcon>
          <AntDesign name="left" size={26} color="#0066FF" z-index='1' />
        </ConteinerIcon>
      </ConteinerBolaMenor>

    {/* Body */}

      <ConteinerBolaMaior>

        <TituloH2>Cadastre-se</TituloH2>

        <ConteinerGeral>

          <ConteinerCadastro>

            <Input
              alter
              icon='user-large'
              placeholder='Nome'
            >
            </Input>

            <Input
              alter
              icon='calendar'
              placeholder='Data Nascimento'
            >
            </Input>

            <Input
              alter
              icon='contact-card'
              placeholder='Cpf'
            >
            </Input>

            <Input
              alter
              icon='envelope'
              placeholder='Email'
            >
            </Input>

            <Input
              alter
              icon='eye-slash'
              placeholder='Senha'
            >
            </Input>

            <Input
              alter
              icon='eye-slash'
              placeholder='Confirmar Senha'
            >
            </Input>

            <ConteinerButton>

              <Botao
                alter
                textoBotao='Cadastre-se'
              />

            </ConteinerButton>

            <ConteinerLink>

              <TextLink>Já tem uma conta?</TextLink>
              <Link>Voltar</Link>

            </ConteinerLink>

          </ConteinerCadastro>

        </ConteinerGeral>

      </ConteinerBolaMaior>

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
