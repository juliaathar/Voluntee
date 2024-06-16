import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as yup from 'yup';
import { Container, ConteinerButton } from '../../components/Container/Style';
import { TituloH3 } from '../../components/Titulo/Style';
import { Paragrafo, ParagrafoErro } from '../../components/Paragrafo/Style';
import { ImagemRecupSenha } from '../../components/Imagem/Imagem';
import { Input } from '../../components/Input/Input';
import { Botao } from '../../components/Botao/Botao';
import { StatusBar } from 'expo-status-bar';
import api from '../../service/ApiService';
import { ConteinerBolaMenor, ConteinerIcon } from '../Cadastro/Style';

export const RecuperarSenha = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [btnLoad, setBtnLoad] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Campo obrigatório')
  });

  async function EnviarEmail() {
    setBtnLoad(true);
    try {
      await schema.validate({ email }, { abortEarly: false });
      await api.post(`/RecuperarSenha?email=${email}`);
      navigation.navigate('VerificarEmail', { emailRecuperacao: email });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        let validationErrors = {};
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        console.log("Erro no envio do email de recuperação:", error);
      }
    }
    setBtnLoad(false);
  }

  return (
    <Container style={styles.container}>
      <ConteinerBolaMenor>
        <ConteinerIcon onPress={() => !btnLoad && navigation.navigate("Login")}>
          <AntDesign name="left" size={26} color="#0066FF" z-index='1' />
        </ConteinerIcon>
      </ConteinerBolaMenor>
      <TituloH3>Recuperar Senha</TituloH3>
      <ImagemRecupSenha source={require('../../assets/images/RecuperarSenha.png')} />
      <Paragrafo>Informe seu email cadastrado para enviarmos um link de recuperação de senha.</Paragrafo>
      <Input
        placeholder="Email"
        icon="envelopeBranco"
        fieldValue={email}
        loading={btnLoad}
        onChangeText={(txt) => {
          setEmail(txt);
          if (errors.email) {
            setErrors(prevErrors => ({ ...prevErrors, email: null }));
          }
        }}
      />
      <View style={styles.errorContainer}>
        {errors.email && <ParagrafoErro>{errors.email}</ParagrafoErro>}
      </View>
      <ConteinerButton>
        <Botao disable={btnLoad} loading={btnLoad} textoBotao="Continuar" onPress={EnviarEmail} />
      </ConteinerButton>
      <StatusBar style="auto" />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066FF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  backIcon: {
    position: 'absolute',
    left: 16,
    top: 16
  },
  errorContainer: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: -20
  }
});
