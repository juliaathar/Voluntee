import { Input } from "../../components/Input/Input";
import { TituloH2 } from "../../components/Titulo/Style";
import { ConteinerButton, ConteinerCadastro, ConteinerGeral, ConteinerLink, ConteinerTopLogin } from "../../components/Container/Style"
import { ConteinerBolaMaiorLogin } from "../Cadastro/Style";
import { Botao } from "../../components/Botao/Botao";
import { Link, TextLink } from "../../components/Link/Link";
import { StyleSheet, View } from "react-native";
import { LogoAzul, LogoAzulLogin } from "../../components/Imagem/Imagem";

export const Login = () => {
  return (
    <View style={styles.container}>

      <ConteinerTopLogin>

        <LogoAzulLogin source={require('../../assets/images/LogoAzul.png')} />

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
            >
            </Input>

            <Input
              icon='eye-slash'
              placeholder='Senha'
            >
            </Input>

            <ConteinerLink>
              <Link alter>Esqueceu a senha?</Link>
            </ConteinerLink>

            <ConteinerButton>

              <Botao
                textoBotao='Cadastre-se'
              />

            </ConteinerButton>

            <ConteinerLink>

              <TextLink alter>Não tem uma conta?</TextLink>
              <Link alter>Entrar</Link>

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