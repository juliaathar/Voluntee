import { Input } from "../../components/Input/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TituloH2 } from "../../components/Titulo/Style";
import { ConteinerButton, ConteinerCadastro, ConteinerGeral, ConteinerLink, ConteinerTopLogin } from "../../components/Container/Style"
import { ConteinerBolaMaiorLogin } from "../Cadastro/Style";
import { Botao } from "../../components/Botao/Botao";
import { Link, TextLink } from "../../components/Link/Link";
import { StyleSheet, View } from "react-native";
import { LogoAzul, LogoAzulLogin } from "../../components/Imagem/Imagem";
import { useState } from "react";
import api from "../../service/ApiService";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
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

    } catch (error) {
      console.log("Erro no login");
      console.log(error);
    }
  }



  return (
    <View style={styles.container}>

      <ConteinerTopLogin>

        <LogoAzulLogin/>

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
              icon='envelope'
              placeholder='Email'
              value={email}
              onChangeText={(newValue) => { setEmail(newValue) }}
            >
            </Input>

            <Input
              icon='eye-slash'
              placeholder='Senha'
              value={senha}
              onChangeText={(newValue) => { setSenha(newValue) }}
            >
            </Input>

            <ConteinerLink>
              <Link alter>Esqueceu a senha?</Link>
            </ConteinerLink>

            <ConteinerButton>

              <Botao
                onPress={handleLogin}
                textoBotao='Entrar'
              />

            </ConteinerButton>

            <ConteinerLink>

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