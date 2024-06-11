import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ConteinerButton, ConteinerCadastro, ConteinerGeral, ConteinerLink } from '../../components/Container/Style';
import { Input } from '../../components/Input/Input';
import { ConteinerBolaMenor, ConteinerBolaMaior, ConteinerIcon } from './Style';
import { TituloH2 } from '../../components/Titulo/Style';
import { Botao } from '../../components/Botao/Botao';
import { Link, TextLink } from '../../components/Link/Link';
import { ParagrafoErro } from '../../components/Paragrafo/Style';
import api from '../../service/ApiService';
import * as yup from 'yup';

export const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errors, setErrors] = useState({});

  const schema = yup.object().shape({
    nome: yup.string().required('Campo obrigatório').test('nome-sobrenome', 'Deve conter nome e sobrenome', value => {
      const parts = value.split(' ');
      return parts.length >= 2;
    }),
    email: yup.string().email('Email inválido').matches(/@gmail\.com$/, 'Email deve ser @gmail.com').required('Campo obrigatório'),
    cpf: yup.string().matches(/^\d{11}$/, 'CPF deve conter 11 dígitos').required('Campo obrigatório'),
    senha: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial').required('Campo obrigatório'),
    confirm: yup.string().oneOf([yup.ref('senha'), null], 'Senhas não conferem').required('Campo obrigatório')
  });

  async function cadastrar() {
    try {
      await schema.validate({ nome, email, cpf, senha, confirm }, { abortEarly: false });

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
        console.log("Cadastro realizado com sucesso");
        navigation.navigate('Login');
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        let validationErrors = {};
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        console.log('Erro ao cadastrar:', error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <ConteinerBolaMenor>
        <ConteinerIcon onPress={() => navigation.navigate('Login')}>
          <AntDesign name="left" size={26} color="#0066FF" z-index='1' />
        </ConteinerIcon>
      </ConteinerBolaMenor>
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
              style={{ borderColor: errors.nome ? '#C81D25' : '#0066FF', borderWidth: errors.nome ? 2 : 2 }}
            />
            {errors.nome && <ParagrafoErro style={{ color: '#C81D25' }}>{errors.nome}</ParagrafoErro>}
            <Input
              alter
              icon='envelopeAzul'
              placeholder='Email'
              fieldValue={email}
              onChangeText={(v) => setEmail(v)}
              style={{ borderColor: errors.email ? '#C81D25' : '#0066FF', borderWidth: errors.email ? 2 : 2 }}
            />
            {errors.email && <ParagrafoErro style={{ color: '#C81D25' }}>{errors.email}</ParagrafoErro>}
            <Input
              alter
              icon='idCard'
              placeholder='CPF'
              fieldValue={cpf}
              onChangeText={(v) => setCpf(v)}
              style={{ borderColor: errors.cpf ? '#C81D25' : '#0066FF', borderWidth: errors.cpf ? 2 : 2 }}
            />
            {errors.cpf && <ParagrafoErro style={{ color: '#C81D25' }}>{errors.cpf}</ParagrafoErro>}
            <Input
              alter
              icon='calendar'
              placeholder='Data Nascimento'
              fieldValue={data}
              onChangeText={(v) => setData(v)}
            />
            <Input
              alter
              icon='olhoAzul'
              placeholder='Senha'
              fieldValue={senha}
              secure={true}
              onChangeText={(v) => setSenha(v)}
              style={{ borderColor: errors.senha ? '#C81D25' : '#0066FF', borderWidth: errors.senha ? 2 : 2 }}
            />
            {errors.senha && <ParagrafoErro style={{ color: '#C81D25' }}>{errors.senha}</ParagrafoErro>}
            <Input
              alter
              icon='olhoAzul'
              secure={true}
              placeholder='Confirmar Senha'
              fieldValue={confirm}
              onChangeText={(v) => setConfirm(v)}
              style={{ borderColor: errors.confirm ? '#C81D25' : '#0066FF', borderWidth: errors.confirm ? 2 : 2 }}
            />
            {errors.confirm && <ParagrafoErro style={{ color: '#C81D25' }}>{errors.confirm}</ParagrafoErro>}
            <ConteinerButton>
              <Botao
                alter
                textoBotao='Cadastrar'
                onPress={cadastrar}
              />
            </ConteinerButton>
            <ConteinerLink onPress={() => navigation.navigate('Login')}>
              <TextLink>Já tem uma conta?</TextLink>
              <Link onPress={() => navigation.navigate('Login')}>Voltar</Link>
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
