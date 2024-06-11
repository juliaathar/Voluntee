import { AntDesign } from '@expo/vector-icons';

import { StyleSheet } from "react-native";
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style";
import { TituloH3 } from '../../components/Titulo/Style';
import { Paragrafo } from '../../components/Paragrafo/Style';
import { ImagemRedefSenha } from '../../components/Imagem/Imagem';
import { Input } from '../../components/Input/Input';
import { Botao } from '../../components/Botao/Botao';
import { Container, ConteinerButton } from '../../components/Container/Style';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import api from '../../service/ApiService';

export const RedefinirSenha = ({ navigation, route }) => {
    const [senha, setSenha] = useState(null);
    const [confirmarSenha, Setconfirmarsenha] = useState(null);


    async function AtualizarSenha() {
        if (senha === confirmarSenha) {
            await api.put(`/Usuario/AlterarSenha?email=${route.params.emailRecuperacao}`, {
                senhaNova: senha
            }).then(() => {
                navigation.replace("Login")
            }).catch(error => {
                console.log(error);
            })
        }
    }
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

                icon='olhoBranco'
                placeholder='Senha'
                secure={true}
                onChangeText={(txt) => setSenha(txt)}
            ></Input>

            <Input

                icon='olhoBranco'
                placeholder='Senha'
                secure={true}
                onChangeText={(txt) => Setconfirmarsenha(txt)}
            ></Input>

            <ConteinerButton>

                <Botao
                    textoBotao='Redefinir'
                    onPress={() => AtualizarSenha()}
                />

            </ConteinerButton>

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