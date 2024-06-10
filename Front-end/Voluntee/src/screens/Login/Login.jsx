import { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as yup from 'yup';
import { ConteinerButton, ConteinerCadastro, ConteinerGeral, ConteinerLink, ConteinerTopLogin } from "../../components/Container/Style";
import LogoAzulSvg from "../../components/LogoAzulSvg/LogoAzulSvg";
import { TituloH2 } from "../../components/Titulo/Style";
import { ConteinerBolaMaiorLogin } from "../Cadastro/Style";
import { Input } from "../../components/Input/Input";
import { Link, TextLink } from "../../components/Link/Link";
import { Botao } from "../../components/Botao/Botao";
import { ParagrafoErro } from "../../components/Paragrafo/Style";
import api from "../../service/ApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({});
  const [btnLoad, setBtnLoad] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    senha: yup.string().required('Campo obrigatório')
  });

  const handleLogin = async () => {
    setBtnLoad(true)
    try {
      await schema.validate({ email, senha }, { abortEarly: false });

      console.log("Iniciando tentativa de login...");

      console.log(email, senha);

      const response = await api.post('/Login', {
        email: email,
        senha: senha
      });

      if (response.data) {
        console.log("Resposta da API:", response.data);
        await AsyncStorage.setItem('token', JSON.stringify(response.data));
        console.log("Token salvo:", response.data);
      }

      navigation.navigate('Home');

      setBtnLoad(false);


    } catch (error) {
      if (error instanceof yup.ValidationError) {
        let validationErrors = {};
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
        setBtnLoad(false)
      } else {
        console.log("Erro no login");
        console.log(error);
      }
    }
  }

  return (
    <View style={styles.container}>

      <ConteinerTopLogin>

        <LogoAzulSvg width="239" height="100" />

        <TituloH2>Entre e transforme vidas hoje!</TituloH2>
        {/* <TituloH2>Vidas Hoje!</TituloH2> */}

      </ConteinerTopLogin>


      <ConteinerBolaMaiorLogin>

        <TituloH2
          alter>
          Login</TituloH2>

        <ConteinerGeral>
          <ConteinerCadastro>

            <Input
              icon='envelopeBranco'
              placeholder='Email'
              value={email}
              onChangeText={(newValue) => { setEmail(newValue) }}
              style={{ borderColor: errors.email ? '#fbfbfb' : '#fbfbfb', borderWidth: errors.email ? 2 : 2 }}
            />
            {errors.email && <ParagrafoErro style={{ color: '#fbfbfb' }}>{errors.email}</ParagrafoErro>}

            <Input
              icon='olhoBranco'
              placeholder='Senha'
              value={senha}
              secure={true}
              onChangeText={(newValue) => { setSenha(newValue) }}
              style={{ borderColor: errors.senha ? '#fbfbfb' : '#fbfbfb', borderWidth: errors.senha ? 2 : 2 }}
            />
            {errors.senha && <ParagrafoErro style={{ color: '#fbfbfb' }}>{errors.senha}</ParagrafoErro>}

            <ConteinerLink onPress={() => navigation.navigate("RecuperarSenha")}>
              <Link alter>Esqueceu a senha?</Link>
            </ConteinerLink>

            <ConteinerButton>

              <Botao
                loading={btnLoad}
                onPress={handleLogin}
                textoBotao='Entrar'
              />

            </ConteinerButton>

            <ConteinerLink onPress={() =>{
               navigation.navigate('Cadastro')
               setEmail('')
               setSenha('')
            }}>

              <TextLink alter>Não tem uma conta?</TextLink>
              <Link alter>Cadastre-se</Link>

            </ConteinerLink>

          </ConteinerCadastro>

        </ConteinerGeral>

      </ConteinerBolaMaiorLogin>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
