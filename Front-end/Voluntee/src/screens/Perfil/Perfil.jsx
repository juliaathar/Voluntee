import { 
    ButtonPerfil, 
    ConteinerAtrásPerfil, 
    ConteinerImagem, 
    ConteinerInput, 
    ConteinerLinkPerfil, 
    ConteinerPerfil, 
    BotaoCamera, 
    FotoPerfil, 
    ImagemMedalha, 
    LabelInput, 
    LinkPerfil, 
    NomePerfil, 
    TituloLevel, 
    TituloPerfil 
} from './Style';
import { ContainerAzul, ConteinerGeral } from "../../components/Container/Style"
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAvoidingView, ScrollView, View, TextInput } from 'react-native';
import { TextButton } from '../../components/Botao/Style';
import { Input } from '../../components/Input/Input';
import { userDecodeToken } from '../../utils/Auth';
import * as Progress from "react-native-progress";
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import api from '../../service/ApiService';
import moment from 'moment';

export const Perfil = ({ navigation, route }) => {

    //dados do perfil
    const [editarPerfil, setEditarPerfil] = useState(false)
    const [fotoPerfil, setFotoPerfil] = useState('')
    const [idUsuario, setIdUsuario] = useState('')
    const [dataNasc, setDataNasc] = useState()
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')

    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const [xpMax, setXpMax] = useState(300);

    function calcularProgressoNivel() {
        return xp / xpMax;
    }

    function definirNivel(xp) {
        if (xp >= 2400) return 5;
        else if (xp >= 1200) return 4;
        else if (xp >= 600) return 3;
        else if (xp >= 300) return 2;
        else return 1;
    }

    async function carregarPerfil() {
        try {
            const token = await userDecodeToken();
            setNome(token.name);
            setEmail(token.email);
            setIdUsuario(token.id);

            const response = await api.get(`/Usuario/Id?id=${token.id}`);
            const userData = response.data;

            setFotoPerfil(userData.foto);
            setCpf(userData.cpf);
            setDataNasc(userData.dataNascimento);
            setXp(userData.pontos);

            setLevel(definirNivel(userData.pontos));

            switch (level) {
                case 1:
                    setXpMax(300);
                    break;
                case 2:
                    setXpMax(600);
                    break;
                case 3:
                    setXpMax(1200);
                    break;
                case 4:
                    setXpMax(2400);
                    break;
                case 5:
                    setXpMax(4800);
                    break;
                default:
                    setXpMax(300);
            }

        } catch (error) {
            console.log('Erro ao carregar perfil:', error);
        }
        navigation.navigate('Perfil')
    }

    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            await ImagePicker.requestMediaLibraryPermissionsAsync();
            requestPermission(status === 'granted')
        })
        carregarPerfil()
    }, [])

    useFocusEffect(
        useCallback(() => {
            carregarPerfil();
        }, [])
    );

    async function SelectImageGallery() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1
        });
        setFotoPerfil(result.assets[0].uri)
    }

    async function atualizarUsuario() {
        try {
            const token = JSON.parse(await AsyncStorage.getItem('token')).token;

            const requestBody = {
                nome: nome,
                email: email
            };

            await api
                .patch(`/Usuario/Id?id=${idUsuario}`, requestBody, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log('Perfil atualizado');
                    console.log(response.status);
                    carregarPerfil();  
                    navigation.navigate('Perfil')
                })
                .catch(error => {
                    console.log('Não foi possível atualizar os dados do usuário: ' + error);
                });

            setEditarPerfil(false);
        } catch (error) {
            console.log('Erro ao atualizar usuário:', error);
        }
    }

    async function AlterarFotoPerfil(newPhotoUri) {
        const formData = new FormData();
        formData.append("Arquivo", {
            uri: newPhotoUri,
            name: `image.${newPhotoUri.split(".").pop()}`,
            type: `image/${newPhotoUri.split(".").pop()}`
        });

        await api.put(`/Usuario/AlterarFotoPerfil?id=${idUsuario}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            setFotoPerfil(newPhotoUri);
            console.log("Foto atualizada");
            console.log(response.status);
        }).catch(error => {
            Alert.alert('Erro ao atualizar foto de perfil do usuario');
            console.log(error);
        });
    }

    async function cancelarEdicao() {
        setEditarPerfil(false)
        carregarPerfil()
    }

    useEffect(() => {
        carregarPerfil();

        if (route.params?.photoUri) {
            setFotoPerfil(route.params.photoUri);
            AlterarFotoPerfil(route.params.photoUri);
        }
    }, [route.params?.photoUri]);

    useEffect(() => {
        if (fotoPerfil) {
            AlterarFotoPerfil()
        }
    }, [fotoPerfil])

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

    return (
        <KeyboardAvoidingView style={{ width: '100%', alignSelf: 'center' }} keyboardVerticalOffset={80}>
            <ScrollView>

                <ContainerAzul>

                    <ConteinerBolaMenor>
                        <ConteinerIcon onPress={() => navigation.navigate('Home')}>
                            <AntDesign name="left" size={26} color="#0066FF" z-index='1' />
                        </ConteinerIcon>
                    </ConteinerBolaMenor>

                    <ConteinerPerfil>
                        <TituloPerfil alter>Perfil</TituloPerfil>

                        {fotoPerfil ? <FotoPerfil source={{ uri: fotoPerfil }} /> : <FotoPerfil source={require("../../assets/images/pfpdefault.png")} />}

                        <NomePerfil>{nome}</NomePerfil>
                    </ConteinerPerfil>

                    <ConteinerAtrásPerfil>
                        <ImagemMedalha source={require('../../assets/images/GoldMedal.png')} />

                        <BotaoCamera onPress={() => navigation.navigate('CameraScrenn', { SetMediaLabrary: true, Tela: "Main" })}>
                            <Feather name="edit" size={24} color="white" />
                        </BotaoCamera>
                    </ConteinerAtrásPerfil>

                    <ConteinerImagem>
                        <Progress.Bar
                            progress={calcularProgressoNivel()}
                            width={200} 
                            borderColor='#FBFBFB'
                            color='#fbfbfb' 
                        />
                        <TituloLevel>{`Nível ${level}`}</TituloLevel>
                    </ConteinerImagem>

                    <ConteinerGeral>
                        <ConteinerInput>

                            <LabelInput>Nome</LabelInput>
                            <Input
                                fieldValue={nome}
                                onChangeText={(newValue) => setNome(newValue)}
                                editable={editarPerfil}
                            />

                            <LabelInput>E-mail</LabelInput>
                            <Input
                                fieldValue={email}
                                onChangeText={(newValue) => setEmail(newValue)}
                                editable={editarPerfil}
                            />

                            <View style={{ opacity: editarPerfil ? 0.5 : 1 }}>
                                <LabelInput>Data de nascimento</LabelInput>
                                <Input
                                    fieldValue={dataNasc ? formatarData(dataNasc) : null}
                                    editable={false}
                                />

                                <LabelInput>CPF</LabelInput>
                                <Input
                                    fieldValue={cpf}
                                    editable={false}
                                />
                            </View>
                        </ConteinerInput>
                    </ConteinerGeral>

                    <ButtonPerfil onPress={editarPerfil ? () => atualizarUsuario() : () => setEditarPerfil(true)}>
                        <TextButton>{editarPerfil ? "Salvar" : "Editar"}</TextButton>
                    </ButtonPerfil>

                    {!editarPerfil && (
                        <ConteinerLinkPerfil>
                            <LinkPerfil onPress={() => fecharApp()}>Sair</LinkPerfil>
                        </ConteinerLinkPerfil>
                    )}

                </ContainerAzul>

                <StatusBar style="auto" />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
