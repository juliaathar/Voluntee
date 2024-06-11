import React, { useState } from 'react';
import { View, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import * as yup from 'yup';
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style";
import { TituloH3 } from '../../components/Titulo/Style';
import { Paragrafo, ParagrafoErro } from '../../components/Paragrafo/Style';
import { ImagemRecupSenha } from '../../components/Imagem/Imagem';
import { Input } from '../../components/Input/Input';
import { Botao } from '../../components/Botao/Botao';
import { Container, ConteinerButton } from '../../components/Container/Style';
import { StatusBar } from 'expo-status-bar';
import api from '../../service/ApiService';

export const RecuperarSenha = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [btnLoad, setBtnLoad] = useState(false);

    const schema = yup.object().shape({
        email: yup.string().email('Email inválido').matches(/@gmail\.com$/, 'O email deve ser um @gmail.com').required('Campo obrigatório')
    });

    async function EnviarEmail() {
        setBtnLoad(true)
        try {
        setBtnLoad(true)
            await schema.validate({ email }, { abortEarly: false });
            await api.post(`/RecuperarSenha?email=${email}`)
                .then(() => {
                    navigation.navigate('VerificarEmail', { emailRecuperacao: email });
                }).catch(error => {
                    console.log(error);
                });
                setBtnLoad(false)

        } catch (error) {
            if (error instanceof yup.ValidationError) {
                let validationErrors = {};
                error.inner.forEach(err => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            }
        }
        setBtnLoad(false)

    }

    return (
        <Container style={styles.container}>
            <ConteinerBolaMenor>
                <ConteinerIcon onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={26} color="#0066FF" />
                </ConteinerIcon>
            </ConteinerBolaMenor>

            <TituloH3>Recuperar Senha</TituloH3>

            <ImagemRecupSenha source={require('../../assets/images/RecuperarSenha.png')} />

            <Paragrafo>Informe seu email cadastrado que enviaremos um link para recuperação de senha</Paragrafo>

            <Input
                placeholder={"Email"}
                icon='envelopeBranco'
                fieldValue={email}
                loading={btnLoad}
                onChangeText={(txt) => {
                    setEmail(txt);
                    if (errors.email) {
                        setErrors((prevErrors) => ({ ...prevErrors, email: null }));
                    }
                }}
            />
            {errors.email && <ParagrafoErro>{errors.email}</ParagrafoErro>}

            <ConteinerButton>
                <Botao
                   loading={btnLoad}
                    textoBotao='Continuar'
                    onPress={() => EnviarEmail()}
                />
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
    },
});
