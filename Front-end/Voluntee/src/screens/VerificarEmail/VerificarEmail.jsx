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
        setBtnLoad(true);

        if (codigo.length !== 4) {
            setErrors('O código deve ter 4 dígitos');
            setBtnLoad(false); // Parar o carregamento em caso de erro
            setReenviarDisabled(true); // Desativar o botão de reenviar
            setTimeout(() => {
                setReenviarDisabled(false); // Reativar o botão após 30 segundos
            }, 30000);
            return;
        }

        try {
            await api.post(`/RecuperarSenha/ValidarCodigoRecuperarSenha?email=${route.params.emailRecuperacao}&codigo=${codigo}`)
                .then(() => {
                    console.log({ emailRecuperacao: route.params.emailRecuperacao })
                    navigation.replace("RedefinirSenha", { emailRecuperacao: route.params.emailRecuperacao });
                }).catch(error => {
                    console.log(error);
                    setErrors('Código inválido');
                    setReenviarDisabled(true); 
                    setTimeout(() => {
                        setReenviarDisabled(false);
                    }, 3000);
                });
        } catch (error) {
            console.log(error);
            setErrors('Erro ao validar código');
            setBtnLoad(true);
            setTimeout(() => {
                setBtnLoad(false); 
            }, 3000);
        }
        setBtnLoad(false);

    }
    async function EnviarEmail(email) {
        setBtnLoad(true);
        try {
            const schema = yup.object().shape({
                email: yup.string().required("Campo obrigatório").email("E-mail inválido")
            });

            await schema.validate({ email }, { abortEarly: false });

            const response = await api.post(`/RecuperarSenha?email=${email}`);
            console.log('Email response:', response);
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                let validationErrors = {};
                error.inner.forEach(err => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            } else {
                console.error('Erro ao recuperar senha:', error);
            }
        } finally {
            setBtnLoad(false);
        }
    }

    const reenviarCodigo = () => {
        EnviarEmail(route.params.emailRecuperacao);
        console.log(route.params);
        console.log("email enviado");
    };

    useEffect(() => {
        inputs[0].current.focus();
    }, []);

    return (
        <Container style={styles.container}>
            <ConteinerBolaMenor>
                <ConteinerIcon onPress={() => !btnLoad && navigation.navigate("RecuperarSenha")}>
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

            <View style={styles.errorContainer}>
                {errors && <ParagrafoErro>{errors}</ParagrafoErro>}
            </View>

            <ConteinerButton>
                <Botao
                    loading={btnLoad}
                    disabled={btnLoad}
                    textoBotao='Continuar'
                    onPress={ValidarCodigo}
                />
            </ConteinerButton>

            <Link style={styles.btnCode} onPress={() => { !btnLoad && reenviarCodigo }} alter>Reenviar código</Link>

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
    errorContainer: {
        alignSelf: 'flex-start',
        marginLeft: 35,
        marginTop: -15
    },
    btnCode: {
        marginTop: 25
    }
});
