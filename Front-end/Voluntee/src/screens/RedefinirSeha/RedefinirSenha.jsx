import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style";
import { TituloH3 } from '../../components/Titulo/Style';
import { Paragrafo, ParagrafoErro } from '../../components/Paragrafo/Style';
import { ImagemRedefSenha } from '../../components/Imagem/Imagem';
import { Input } from '../../components/Input/Input';
import { Botao } from '../../components/Botao/Botao';
import { Container, ConteinerButton } from '../../components/Container/Style';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import api from '../../service/ApiService';

export const RedefinirSenha = ({ navigation, route }) => {
    const [senha, setSenha] = useState('');
    const [confirmarSenha, Setconfirmarsenha] = useState('');
    const [errors, setErrors] = useState({});
    const [btnLoad, setBtnLoad] = useState(false);

    useEffect(() => {
        console.log(route)
    }, [route]);


    const schema = yup.object().shape({
        senha: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial').required('Campo obrigatório'),
        confirmarSenha: yup.string().oneOf([yup.ref('senha'), null], 'Senhas não conferem').required('Campo obrigatório')
    });

    async function AtualizarSenha() {
        setBtnLoad(true)
        try {
            await schema.validate({ senha, confirmarSenha }, { abortEarly: false });
            await api.put(`/Usuario/AlterarSenha?email=${route.params.emailRecuperacao}`, {
                senhaNova: senha
            }).then(() => {
                navigation.replace("Login")
            }).catch(error => {
                console.log(error);
            });
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                let validationErrors = {};
                error.inner.forEach(err => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            } else {
                console.log(error);
            }
        }
        setBtnLoad(false)
    }

    return (
        <Container style={styles.container}>
            <ConteinerBolaMenor>
                <ConteinerIcon onPress={() => navigation.navigate("VerificarEmail")}>
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
                style={{ borderColor: errors.senha ? '#fbfbfb' : '#fbfbfb', borderWidth: 2 }}
            />
            {errors.senha && <ParagrafoErro>{errors.senha}</ParagrafoErro>}

            <Input
                icon='olhoBranco'
                placeholder='Confirme sua senha'
                secure={true}
                onChangeText={(txt) => Setconfirmarsenha(txt)}
                style={{ borderColor: errors.confirmarSenha ? '#fbfbfb' : '#fbfbfb', borderWidth: 2 }}
            />
            {errors.confirmarSenha && <ParagrafoErro>{errors.confirmarSenha}</ParagrafoErro>}

            <ConteinerButton>
                <Botao
                    textoBotao='Redefinir'
                    loading={btnLoad}
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
