import { AntDesign } from '@expo/vector-icons';

import { View, StyleSheet } from "react-native";
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style";
import { TituloH3 } from '../../components/Titulo/Style';
import { Paragrafo } from '../../components/Paragrafo/Style';
import { ImagemVerifEmail } from '../../components/Imagem/Imagem';
import { Input } from '../../components/Input/Input';
import { Botao } from '../../components/Botao/Botao';
import { Container, ContainerInput, ConteinerBottom, ConteinerButton, ConteinerLink } from '../../components/Container/Style';
import { Link } from '../../components/Link/Link';
import { InputVerify } from './Style';
import { StatusBar } from 'expo-status-bar';


export const VerificarEmail = () => {
    return (
        <Container style={styles.container}>
            <ConteinerBolaMenor>
                <ConteinerIcon>
                    <AntDesign name="left" size={26} color="#0066FF" z-index='1' />
                </ConteinerIcon>
            </ConteinerBolaMenor>

            <TituloH3>Verifique seu email</TituloH3>

            <ImagemVerifEmail source={require('../../assets/images/VerificarEmail.png')} />

            <Paragrafo>Digite o código que foi enviado para seu email:</Paragrafo>

            <ContainerInput>
                <InputVerify
                    maxLength={1}
                    placeholder= "0"
                    keyboardType="numeric"
                ></InputVerify>
                <InputVerify
                    maxLength={1}
                    placeholder= "0"
                    keyboardType="numeric"
                ></InputVerify>
                <InputVerify
                    maxLength={1}
                    placeholder= "0"
                    keyboardType="numeric"
                ></InputVerify>
                <InputVerify
                    maxLength={1}
                    placeholder= "0"
                    keyboardType="numeric"
                ></InputVerify>
            </ContainerInput>

            <ConteinerButton>

                <Botao
                    textoBotao='Continuar'
                />

            </ConteinerButton>


            <Link alter>Reenviar código</Link>

            <StatusBar style="auto" />

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