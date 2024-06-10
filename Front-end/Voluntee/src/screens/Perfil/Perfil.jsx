import { userDecodeToken } from '../../utils/Auth';

import { useCameraPermissions } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { ContainerAzul, ConteinerGeral } from "../../components/Container/Style"
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style"
import { ButtonPerfil, ConteinerAtrásPerfil, ConteinerImagem, ConteinerInput, ConteinerLinkPerfil, ConteinerPerfil, ConteinerTouchable, FotoPerfil, ImagemMedalha, LabelInput, LinkPerfil, NomePerfil, TituloLevel, TituloPerfil } from './Style';
import { Input } from '../../components/Input/Input';
import { StatusBar } from 'expo-status-bar';
import { Button, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { TextButton } from '../../components/Botao/Style';

import * as Progress from "react-native-progress"
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Perfil = ({navigation}) => {

    const [editarPerfil, setEditarPerfil] = useState(false)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [dataNasc, setDataNasc] = useState()

    const [foto, setFoto] = useState('')
    const [pontos, setPontos] = useState()

    /////// Camera

    // const [facing, setFacing] = useState('back');
    // const [permission, requestPermission] = useCameraPermissions();

    // if (!permission) {
    //     // Camera permissions are still loading.
    //     return <View />;
    // }

    // if (!permission.granted) {
    //     // Camera permissions are not granted yet.
    //     return (
    //         <View>
    //             <Text>We need your permission to show the camera</Text>
    //             <Button onPress={requestPermission} title="grant permission" />
    //         </View>
    //     );
    // }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }


    async function profileLoad() {
        const token = await userDecodeToken()

        setNome(token.nome)
        setCpf(token.cpf)
        setEmail(token.email)
        setIdUser(token.jti)

        await getUser(token)
    }


    async function TrazUsuário(token) {

        try {
            const response = await api.get(`/${url}/BuscarPorId?id=${token.jti}`);
            setDataNasc(response.data.dataNascimento)
            setCpf(response.data.cpf)
        } catch (error) {
            Alert.alert("Erro ao buscar dados do usuario")
        }
    }


    useEffect(() => {

    })

    async function atualizarUsuario() {
        const token = JSON.parse(await AsyncStorage.getItem('token')).token;
        try {
            await api.put('/Usuario', {
                nome: nome = setNome(),
                email: email = setEmail(),
                dataNasc: dataNasc = setDataNasc(),
                cpf: cpf = setCpf(),
                foto: foto = setFoto()
            })

            console.log('Tá trazendo');

        } catch (error) {
            console.log('Não foi possível atualizar os dados do usuário: ' + error);
        }
    }

    async function closeApp() {
        await AsyncStorage.removeItem('token')
        navigation.replace("Login")
    }

    async function alterarFotoPerfil() {
        try {
            //Abrir a camera, e salvar a foto logo após tirada
            console.log('A foto foi tirada!');
        } catch (error) {
            console.log('Não foi possível alterar a foto de perfil: ' + error)
        }
    }




    return (
        <KeyboardAvoidingView style={{ width: '100%', alignSelf: 'center' }} keyboardVerticalOffset={80}>
            {!editarPerfil ? (
                <ScrollView>

                    <ContainerAzul>

                        <ConteinerBolaMenor>
                            <ConteinerIcon>
                                <AntDesign name="left" size={26} color="#0066FF" z-index='1' />
                            </ConteinerIcon>
                        </ConteinerBolaMenor>


                        <ConteinerPerfil>
                            <TituloPerfil alter>Perfil</TituloPerfil>

                            <FotoPerfil source={require('../../assets/images/PerfilTeste.png')} />

                            <NomePerfil>John Doe</NomePerfil>
                        </ConteinerPerfil>

                        <ConteinerAtrásPerfil>
                            <ImagemMedalha source={require('../../assets/images/GoldMedal.png')} />

                            <ConteinerTouchable>
                                <Feather
                                    name="edit"
                                    size={24}
                                    color="white"
                                />
                            </ConteinerTouchable>

                        </ConteinerAtrásPerfil>

                        <ConteinerImagem>

                            <Progress.Bar progress={0.7} width={200} borderColor='#FBFBFB' color='#FBFBFB' />

                            <TituloLevel>20 Level</TituloLevel>



                        </ConteinerImagem>


                        <ConteinerGeral>

                            <ConteinerInput>

                                <LabelInput>Nome</LabelInput>
                                <Input placeholder=''
                                >
                                </Input>

                                <LabelInput>E-mail</LabelInput>
                                <Input
                                    placeholder=''
                                >
                                </Input>

                                <LabelInput>Data de nascimento</LabelInput>
                                <Input
                                    placeholder=''
                                >
                                </Input>

                                <LabelInput>Cpf</LabelInput>
                                <Input
                                    placeholder=''
                                >
                                </Input>

                            </ConteinerInput>


                        </ConteinerGeral>


                        <ButtonPerfil onPress={() => atualizarUsuario(true)}>
                            <TextButton>Editar</TextButton>
                        </ButtonPerfil>


                        <ConteinerLinkPerfil>
                            <LinkPerfil onPress={() => closeApp()}>Sair</LinkPerfil>
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

                            <FotoPerfil source={require('../../assets/images/PerfilTeste.png')} />

                            <NomePerfil>John Doe</NomePerfil>
                        </ConteinerPerfil>

                        <ConteinerAtrásPerfil>
                            <ImagemMedalha source={require('../../assets/images/GoldMedal.png')} />

                            <ConteinerTouchable>
                                <Feather
                                    onPress={editarPerfil => setEditarPerfil(true)}
                                    name="edit"
                                    size={24}
                                    color="white"
                                />
                            </ConteinerTouchable>

                        </ConteinerAtrásPerfil>

                        <ConteinerImagem>

                            <Progress.Bar progress={0.7} width={200} borderColor='#FBFBFB' color='#FBFBFB' />

                            <TituloLevel>20 Level</TituloLevel>


                        </ConteinerImagem>


                        <ConteinerGeral>

                            <ConteinerInput>

                                <LabelInput>Nome</LabelInput>
                                <Input placeholder=''
                                >
                                </Input>

                                <LabelInput>E-mail</LabelInput>
                                <Input
                                    placeholder=''
                                >
                                </Input>

                                <LabelInput>Data de nascimento</LabelInput>
                                <Input
                                    placeholder=''
                                >
                                </Input>

                                <LabelInput>Cpf</LabelInput>
                                <Input
                                    placeholder=''
                                >
                                </Input>

                            </ConteinerInput>


                        </ConteinerGeral>


                        <ButtonPerfil onPress={() => atualizarUsuario(false)}>
                            <ButtonTitle>SALVAR</ButtonTitle>
                        </ButtonPerfil>


                        <ConteinerLinkPerfil>
                            <LinkPerfil onPress={() => closeApp()}>Sair</LinkPerfil>
                        </ConteinerLinkPerfil>


                    </ContainerAzul>

                    <StatusBar style="auto" />

                </ScrollView>
            )

            }
        </KeyboardAvoidingView>

    )
}