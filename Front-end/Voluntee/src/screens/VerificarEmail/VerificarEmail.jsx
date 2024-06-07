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
import { ContentVerify, InputVerify } from './Style';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import api from '../../service/ApiService';


export const VerificarEmail = ({navigation, route}) => {

    const [codigo, setCodigo] = useState('')

    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)]

    function focusNextInput(index) {
        // se o index e menor que a quantidade de campos 
        if (index < inputs.length - 1) {
            inputs[index + 1].current.focus()
        }
    }

    function focusPrevInput(index) {
        if (index > 0) {
            inputs[index - 1].current.focus()
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
        inputs[0].current.focus()
    }, [])

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


            <ContentVerify>
                {
                    [0, 1, 2, 3].map((index) => (
                        <InputVerify
                            key={index} //Chave de acordo com o index do map
                            ref={inputs[index]} // Referencia de acordo
                            maxLength={1}
                            placeholder="0"
                            keyboardType="numeric"
                            caretHidden={true}

                            onChangeText={(text) => {
                                //verificar se o texto nao e vazio(para voltar para o campo anterior)
                                if (text == "") {
                                    focusPrevInput(index)

                                } else {

                                    const novoCodigo = [...codigo] //separa os valores 
                                    novoCodigo[index] = text
                                    setCodigo(novoCodigo.join(''))

                                    // setCodigo(`${codigo}${text}`)

                                    //verificar se o campo tem 1 caracter
                                    focusNextInput(index)
                                }


                            }}
                        />
                    ))
                }
            </ContentVerify>


            <ConteinerButton>

                <Botao
                    textoBotao='Continuar'
                    onPress={() => ValidarCodigo()}
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