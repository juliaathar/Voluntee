import { AntDesign } from '@expo/vector-icons';

import { View, StyleSheet } from "react-native";
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style";
import { TituloH3 } from '../../components/Titulo/Style';
import { Paragrafo } from '../../components/Paragrafo/Style';
import { ImagemRecupSenha } from '../../components/Imagem/Imagem';
import { Input } from '../../components/Input/Input';
import { Botao } from '../../components/Botao/Botao';
import { Container, ConteinerBottom, ConteinerButton } from '../../components/Container/Style';


export const RecuperarSenha = () => {
    return (
        <Container style={styles.container}>
            <ConteinerBolaMenor>
                <ConteinerIcon>
                    <AntDesign name="left" size={26} color="#0066FF" z-index='1' />
                </ConteinerIcon>
            </ConteinerBolaMenor>

            <TituloH3>Recuperar Senha</TituloH3>

            <ImagemRecupSenha source={require('../../assets/images/RecuperarSenha.png')} />

            <Paragrafo>Informe seu email cadastrado que enviaremos um link para recuperação de senha</Paragrafo>

            <Input
                placeholder={"Email"}
                icon='envelope'
            ></Input>

            <ConteinerButton>
                <Botao 
                textoBotao='Entar'
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