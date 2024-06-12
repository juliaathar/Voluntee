import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style";
import { TituloH3 } from '../../components/Titulo/Style';
import { Paragrafo, ParagrafoErro } from '../../components/Paragrafo/Style';
import { ImagemVerifEmail } from '../../components/Imagem/Imagem';
import { Botao } from '../../components/Botao/Botao';
import { Container, ConteinerButton } from '../../components/Container/Style';
import { Link } from '../../components/Link/Link';
import { ContentVerify, InputVerify } from './Style';
import { StatusBar } from 'expo-status-bar';
import api from '../../service/ApiService';
import * as yup from 'yup';

export const VerificarEmail = ({ navigation, route }) => {
    const [codigo, setCodigo] = useState('');
    const [errors, setErrors] = useState('');
    const [btnLoad, setBtnLoad] = useState(false);

    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    function focusNextInput(index) {
        if (index < inputs.length - 1) {
            inputs[index + 1].current.focus();
        }
    }

    function focusPrevInput(index) {
        if (index > 0) {
            inputs[index - 1].current.focus();
        }
    }

    async function ValidarCodigo() {
        console.log(codigo);

        await api.post(`/RecuperarSenha/ValidarCodigoRecuperacaoSenha?email=${route.params.emailRecuperacao}&codigo=${codigo}`)
            .then(() => {
                navigation.replace("RedefinirSenha", { emailRecuperacao: route.params.emailRecuperacao });
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        inputs[0].current.focus();
    }, []);

    return (
        <Container style={styles.container}>
            <ConteinerBolaMenor>
                <ConteinerIcon onPress={() => navigation.navigate("RecuperarSenha")}>
                    <AntDesign name="left" size={26} color="#0066FF" />
                </ConteinerIcon>
            </ConteinerBolaMenor>

            <TituloH3>Verifique seu email</TituloH3>

            <ImagemVerifEmail source={require('../../assets/images/VerificarEmail.png')} />

            <Paragrafo>Digite o código que foi enviado para seu email:</Paragrafo>

            <ContentVerify>
                {[0, 1, 2, 3].map((index) => (
                    <InputVerify
                        key={index}
                        ref={inputs[index]}
                        maxLength={1}
                        placeholder="0"
                        keyboardType="numeric"
                        caretHidden={true}
                        onChangeText={(text) => {
                            if (text === "") {
                                focusPrevInput(index);
                            } else {
                                const novoCodigo = [...codigo];
                                novoCodigo[index] = text;
                                setCodigo(novoCodigo.join(''));
                                focusNextInput(index);
                            }
                        }}
                    />
                ))}
            </ContentVerify>
            {errors && <ParagrafoErro>{errors}</ParagrafoErro>}

            <ConteinerButton>
                <Botao
                   loading={btnLoad}
                    textoBotao='Continuar'
                    onPress={ValidarCodigo}
                />
            </ConteinerButton>

            <Link onPress={reenviarCodigo} alter>Reenviar código</Link>

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
    },
});
