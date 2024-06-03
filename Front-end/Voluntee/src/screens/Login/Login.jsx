import { Input } from "../../components/Input/Input";
import { Titulo, TituloH1, TituloH2 } from "../../components/Titulo/Style";
import { ConteinerButton, ConteinerCadastro, ConteinerGeral, ConteinerLink } from "../../components/Container/Style"
import { ConteinerBolaMaior } from "../Cadastro/Style";
import { Botao } from "../../components/Botao/Botao";
import { Link, TextLink } from "../../components/Link/Link";

export const Login = () => {
    return (
        <ConteinerBolaMaior>

        <TituloH2 color="#0066FF">Cadastre-se</TituloH2>

        <ConteinerGeral>

          <ConteinerCadastro>

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
    )
}