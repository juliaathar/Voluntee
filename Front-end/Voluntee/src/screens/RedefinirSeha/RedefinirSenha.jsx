import { AntDesign } from '@expo/vector-icons';

import { View, StyleSheet } from "react-native";
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style";
import { TituloH3 } from '../../components/Titulo/Style';
import { Paragrafo } from '../../components/Paragrafo/Style';
import { ImagemRedefSenha } from '../../components/Imagem/Imagem';
import { Input } from '../../components/Input/Input';
import { Botao } from '../../components/Botao/Botao';
import { Container, ConteinerButton } from '../../components/Container/Style';

export const RedefinirSenha = () => {
    return (
        <Container style={styles.container}>
            <ConteinerBolaMenor>
                <ConteinerIcon>
                    <AntDesign name="left" size={26} color="#0066FF" z-index='1' />
                </ConteinerIcon>
            </ConteinerBolaMenor>

            <TituloH3>Redefinir senha</TituloH3>

            <ImagemRedefSenha source={require('../../assets/images/RedefinirSenha.png')} />

            <Paragrafo>Insira e confirme sua nova senha:</Paragrafo>

            <Input
              
              icon='eye-slash'
              placeholder='Senha'
            ></Input>
            
            <Input
              
              icon='eye-slash'
              placeholder='Senha'
              type="password"
            ></Input>

            <ConteinerButton>

                <Botao
                    textoBotao='Continuar'
                />

            </ConteinerButton>


        </Container>
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