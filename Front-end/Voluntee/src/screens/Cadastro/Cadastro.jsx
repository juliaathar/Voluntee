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
import { useState } from 'react';
import api from '../../service/ApiService';

export const Cadastro = (navigate) => {

  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirm, setConfirm] = useState('');


  async function cadastrar() {
    try {
      const jsonData = {
        nome: nome,
        dataNascimento: data,
        cpf: cpf,
        senha: senha,
        email: email,
        codRecupSenha: 0,
        pontos: 0,
        perfilEditado: true,
        fotoAtualizada: true,
      };

      const response = await api.post("/Usuario", JSON.stringify(jsonData), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        console.log("testeeee");
        console.log("deu certo");
        console.log(response.body);
      }

    } catch (error) {
      console.log(error);
      console.log("errroooo");
    }
  }

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
              icon='user'
              placeholder='Nome'
              fieldValue={nome}
              onChangeText={(v) => setNome(v)}
            >
            </Input>

            <Input
              alter
              icon='envelopeAzul'
              placeholder='Email'
              fieldValue={email}
              onChangeText={(v) => setEmail(v)}
            >
            </Input>
            <Input
              alter
              icon='idCard'
              placeholder='CPF'
              fieldValue={cpf}
              onChangeText={(v) => setCpf(v)}
            >
            </Input>

            <Input
              alter
              icon='calendar'
              placeholder='Data Nascimento'
              fieldValue={data}
              onChangeText={(v) => setData(v)}
            >
            </Input>

            <Input
              alter
              icon='olhoAzul'
              placeholder='Senha'
              fieldValue={senha}
              secure={true}
              onChangeText={(v) => setSenha(v)}
            >
            </Input>

            <Input
              alter
              icon='olhoAzul'
              secure={true}
              placeholder='Confirmar Senha'
            >
            </Input>

            <ConteinerButton>

              <Botao
                alter
                textoBotao='Cadastrar'
                onPress={cadastrar}
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
