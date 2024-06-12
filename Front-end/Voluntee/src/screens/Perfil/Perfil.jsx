import { userDecodeToken } from '../../utils/Auth';

// import { useCameraPermissions } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { ContainerAzul, ConteinerGeral } from "../../components/Container/Style"
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style"
import { ButtonPerfil, ConteinerAtrásPerfil, ConteinerImagem, ConteinerInput, ConteinerLinkPerfil, ConteinerPerfil, BotaoCamera, FotoPerfil, ImagemMedalha, LabelInput, LinkPerfil, NomePerfil, TituloLevel, TituloPerfil } from './Style';
import { Input } from '../../components/Input/Input';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextButton } from '../../components/Botao/Style';

import * as Progress from "react-native-progress"
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Masks, useMaskedInputProps } from "react-native-mask-input"

export const Perfil = ({ navigation, route }) => {

    const [editarPerfil, setEditarPerfil] = useState(false)
    const [idUsuario, setIdUsuario] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [dataNasc, setDataNasc] = useState()

    const [fotoPerfil, setFotoPerfil] = useState('')
    const [pontos, setPontos] = useState()


    async function carregarPerfil() {
        const token = await userDecodeToken()


        setNome(token.name)
        setEmail(token.email)
        setCpf(token.cpf)
        setDataNasc(token.dataNasc)
        setIdUsuario(token.id)

        await atualizarUsuario(token)

        console.log(token);
    }


    // async function atualizarUsuario(token) {

    //     try {
    //         const response = await api.get(`/${url}/BuscarPorId?id=${token.jti}`);
    //         setFotoPerfil(response.data.usuarioDto.fotoPerfil)
    //         setDataNasc(response.data.usuarioDto.dataNascimento)
    //         setCpf(response.data.usuarioDto.cpf)
    //     } catch (error) {
    //         Alert.alert("Erro ao buscar dados do usuario:" + error)
    //     }
    // }

    async function atualizarUsuario() {
        const token = JSON.parse(await AsyncStorage.getItem('token')).token;
        try {
            await api.put('/Usuario', {
                nome: nome,
                email: email,
                dataNasc: dataNasc,
                cpf: cpf,
                fotoPerfil: fotoPerfil
            }, { headers: { Authorization: `Bearer ${token}` } })

            setEditarPerfil(false);

        } catch (error) {
            console.log('Não foi possível atualizar os dados do usuário: ' + error);
        }
    }

    async function AlterarFotoPerfil() {
        const formData = new FormData();
        formData.append("Arquivo", {
            uri: route.params.photoUri,
            name: `image.jpg`,
            type: `image/jpg`
        })

        try {
            await api.put(`/Usuario/AlterarFotoPerfil?id=${idUsuario}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(() => {
                setFotoUsuario(route.params.photoUri)
            })
        } catch (error) {
            Alert.alert('Erro ao atualizar foto de perfil do usuario')
            console.log(error);
        }

    }

    async function cancelarEdicao() {
        setEditarPerfil(false)
        carregarPerfil()
    }

    useEffect(() => {
        carregarPerfil();
    }, [])

    useEffect(() => {
        if (route.params && idUsuario != '') {
            AlterarFotoPerfil()
        }

    }, [route.params, idUsuario])

    async function fecharApp() {
        await AsyncStorage.removeItem('token')
        navigation.replace("Login")
    }

    function formatarData(data, isValid) {
        if (isValid == false) {
            return moment(data).format('YYYY-MM-DD');
        }
        return moment(data).format('DD/MM/YYYY');
    }

    const cpfMasked = useMaskedInputProps({
        value: cpf,
        onChangeText: setCpf,
        mask: Masks.BRL_CPF
    })

    const dataMasked = useMaskedInputProps({
        value: dataNasc,
        onChangeText: setDataNasc,
        mask: Masks.DATE_DDMMYYYY
    });


    return (
        <KeyboardAvoidingView style={{ width: '100%', alignSelf: 'center' }} keyboardVerticalOffset={80}>
            {!editarPerfil ? (
                <ScrollView>

                    <ContainerAzul>

                        <ConteinerBolaMenor>
                            <ConteinerIcon onPress={() => navigation.navigate('Home')}>
                                <AntDesign name="left" size={26} color="#0066FF" z-index='1' />
                            </ConteinerIcon>
                        </ConteinerBolaMenor>


                        <ConteinerPerfil>
                            <TituloPerfil alter>Perfil</TituloPerfil>

                            {/* <FotoPerfil source={require('../../assets/images/PerfilTeste.png')} /> */}
                            <FotoPerfil source={{ uri: fotoPerfil }} />

                            <NomePerfil>{nome}</NomePerfil>
                        </ConteinerPerfil>

                        <ConteinerAtrásPerfil>
                            <ImagemMedalha source={require('../../assets/images/GoldMedal.png')} />

                            <BotaoCamera onPress={() => navigation.navigate("CameraPhoto")}>
                                <Feather
                                    name="edit"
                                    size={24}
                                    color="white"
                                />
                            </BotaoCamera>

                        </ConteinerAtrásPerfil>

                        <ConteinerImagem>

                            <Progress.Bar progress={0.7} width={200} borderColor='#FBFBFB' color='#FBFBFB' />

                            <TituloLevel>20 Level</TituloLevel>



                        </ConteinerImagem>


                        <ConteinerGeral>

                            <ConteinerInput>

                                <LabelInput>Nome</LabelInput>
                                <Input
                                    fieldValue={nome}
                                    editable={false}
                                >
                                </Input>

                                <LabelInput>E-mail</LabelInput>
                                <Input
                                    fieldValue={email}
                                    editable={false}
                                >
                                </Input>

                                <LabelInput>Data de nascimento</LabelInput>
                                <Input
                                    fieldValue={dataNasc ? formatarData(dataNasc) : null}
                                    editable={false}
                                >
                                </Input>

                                <LabelInput>Cpf</LabelInput>
                                <Input
                                    fieldValue={cpf}
                                    editable={false}
                                >
                                </Input>

                            </ConteinerInput>


                        </ConteinerGeral>


                        <ButtonPerfil onPress={() => atualizarUsuario(true)}>
                            <TextButton>Editar</TextButton>
                        </ButtonPerfil>


                        <ConteinerLinkPerfil>
                            <LinkPerfil onPress={() => fecharApp()}>Sair</LinkPerfil>
                        </ConteinerLinkPerfil>


                    </ContainerAzul>

                    <StatusBar style="auto" />

                </ScrollView>
            ) : (
                <ScrollView>

                    <ContainerAzul>

                        <ConteinerBolaMenor>
                            <ConteinerIcon>
                                <AntDesign name="left" size={26} color="#0066FF" z-index='1' />
                            </ConteinerIcon>
                        </ConteinerBolaMenor>


                        <ConteinerPerfil>
                            <TituloPerfil alter>Perfil</TituloPerfil>

                            {/* <FotoPerfil source={require('../../assets/images/PerfilTeste.png')} /> */}
                            <FotoPerfil source={{ uri: fotoPerfil }} />

                            <NomePerfil>{nome}</NomePerfil>
                        </ConteinerPerfil>

                        <ConteinerAtrásPerfil>
                            <ImagemMedalha source={require('../../assets/images/GoldMedal.png')} />

                            {/* <BotaoCamera>
                                <Feather
                                    name="edit"
                                    size={24}
                                    color="white"
                                />
                            </BotaoCamera> */}

                        </ConteinerAtrásPerfil>

                        <ConteinerImagem>

                            <Progress.Bar progress={0.7} width={200} borderColor='#FBFBFB' color='#FBFBFB' />

                            <TituloLevel>20 Level</TituloLevel>



                        </ConteinerImagem>


                        <ConteinerGeral>

                            <ConteinerInput>

                                <LabelInput>Nome</LabelInput>
                                <Input
                                    fieldValue={nome}
                                >
                                </Input>

                                <LabelInput>E-mail</LabelInput>
                                <Input
                                    fieldValue={email}
                                >
                                </Input>

                                <LabelInput>Data de nascimento</LabelInput>
                                <Input
                                    fieldValue={dataNasc ? formatarData(dataNasc) : null}
                                >
                                </Input>

                                <LabelInput>Cpf</LabelInput>
                                <Input
                                    fieldValue={cpf}
                                >
                                </Input>

                            </ConteinerInput>


                        </ConteinerGeral>


                        <ButtonPerfil onPress={() => atualizarUsuario(true)}>
                            <TextButton>Editar</TextButton>
                        </ButtonPerfil>


                        <ConteinerLinkPerfil>
                            <LinkPerfil onPress={() => cancelarEdicao()}>Sair</LinkPerfil>
                        </ConteinerLinkPerfil>


                    </ContainerAzul>

                    <StatusBar style="auto" />

                </ScrollView>
            )

            }
        </KeyboardAvoidingView>

    )
}