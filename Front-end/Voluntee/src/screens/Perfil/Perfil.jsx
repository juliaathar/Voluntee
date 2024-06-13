import { ButtonPerfil, ConteinerAtrásPerfil, ConteinerImagem, ConteinerInput, ConteinerLinkPerfil, ConteinerPerfil, BotaoCamera, FotoPerfil, ImagemMedalha, LabelInput, LinkPerfil, NomePerfil, TituloLevel, TituloPerfil } from './Style';
import { ContainerAzul, ConteinerGeral } from "../../components/Container/Style"
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextButton } from '../../components/Botao/Style';
import { Input } from '../../components/Input/Input';
import { userDecodeToken } from '../../utils/Auth';
import * as Progress from "react-native-progress";
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import api from '../../service/ApiService';
import moment from 'moment';

export const Perfil = ({ navigation }) => {

    //dados do perfil
    const [editarPerfil, setEditarPerfil] = useState(false)
    const [fotoPerfil, setFotoPerfil] = useState('')
    const [idUsuario, setIdUsuario] = useState('')
    const [dataNasc, setDataNasc] = useState()
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')

    //sistema de Xp
    const [xp, setXp] = useState(0)
    const [xpMax, setXpMax] = useState(300)
    const [level, setLevel] = useState(2)

    function CalcularLevel(xp,xpMax) {
        console.log(xp/xpMax);
        console.log(xp);
        console.log(xpMax);
        return(xp/xpMax)
    }

    function DefinirLevel() {
        switch (xp) {
            case xp < 300:
                setLevel(1)
                setXpMax(600)
                break;
            case xp < 600:
                setLevel(2)
                setXpMax(1200)
                break;
            case xp < 1200:
                setLevel(3)
                setXpMax(2400)
                break;
            case xp <= 2400:
                setLevel(4)
                setXpMax(4800)
                break;
        
            default:
                break;
        }
    }

    async function carregarPerfil() {
        const token = await userDecodeToken()

        setNome(token.name)
        setEmail(token.email)
        setIdUsuario(token.id)


        api.get(`/Usuario/Id?id=${token.id}`)
            .then(async response => {
                await setFotoPerfil(response.data.foto)
                setCpf(response.data.cpf)
                setDataNasc(response.data.dataNascimento)
                setXp(response.data.pontos)
                console.log(response.data);

                DefinirLevel()
            })
            .catch(error => {
                console.log(`Erro no perfil: ${error}`);
                //console.log(token.id);
            })

        //console.log(token);
    }

    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            await ImagePicker.requestMediaLibraryPermissionsAsync();
            requestPermission(status === 'granted')
            //console.log(getMediaLibrary);
        })
    }, [])

    async function SelectImageGallery() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1
        });
        setFotoPerfil(result.assets[0].uri)
    }

    async function atualizarUsuario() {
        const token = JSON.parse(await AsyncStorage.getItem('token')).token;
        console.log(token);


        await api.patch(`/Usuario/Id?id=${idUsuario}`, {nome: nome, email: email})
        .then(async response =>{
            console.log("perfil atualizado");
            console.log(response.status);
        })
        .catch(error =>{
            console.log('Não foi possível atualizar os dados do usuário: ' + error);
        })
        setEditarPerfil(false);

    }

    async function AlterarFotoPerfil() {
        //console.log("foto: "+fotoPerfil);
        //console.log("usuario: "+idUsuario);

        const formData = new FormData();
        formData.append("Arquivo", {
            uri: fotoPerfil,
            name: `image.${fotoPerfil.split(".").pop()}`,
            type: `image/${fotoPerfil.split(".").pop()}`
        })

        await api.put(`/Usuario/AlterarFotoPerfil?id=${idUsuario}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            setFotoUsuario(fotoPerfil)
            console.log("Foto atualizada");
            console.log(response.status);
        }).catch(error => {
            Alert.alert('Erro ao atualizar foto de perfil do usuario')
            console.log(error);
        })
    }

    async function cancelarEdicao() {
        setEditarPerfil(false)
        carregarPerfil()
    }

    useEffect(() => {
        carregarPerfil();
    }, [])

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

                            {/* <FotoPerfil source={require('../../assets/images/PerfilTeste.png')} /> */}
                            <FotoPerfil source={{ uri: fotoPerfil }} />

                            <NomePerfil>{nome}</NomePerfil>
                        </ConteinerPerfil>

                        <ConteinerAtrásPerfil>
                            <ImagemMedalha source={require('../../assets/images/GoldMedal.png')} />

                            <BotaoCamera onPress={() => SelectImageGallery()}>
                                <Feather
                                    name="edit"
                                    size={24}
                                    color="white"
                                />
                            </BotaoCamera>

                        </ConteinerAtrásPerfil>

                        <ConteinerImagem>

                            <Progress.Bar progress={CalcularLevel(xp,xpMax)} width={200} borderColor='#FBFBFB' color='#FBFBFB' />

                            <TituloLevel>{level} Level</TituloLevel>

                        </ConteinerImagem>


                        <ConteinerGeral>

                            <ConteinerInput>

                                <LabelInput>Nome</LabelInput>
                                <Input
                                    fieldValue={nome}
                                    onChangeText={(newValue) => setNome(newValue)}
                                    editable={editarPerfil}
                                >
                                </Input>

                                <LabelInput>E-mail</LabelInput>
                                <Input
                                    fieldValue={email}
                                    onChangeText={(newValue) => setEmail(newValue)}
                                    editable={editarPerfil}
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


                        <ButtonPerfil onPress={editarPerfil ? () => atualizarUsuario() : () => setEditarPerfil(true)}>
                            <TextButton>{editarPerfil ? "Salvar" : "Editar"}</TextButton>
                        </ButtonPerfil>

                        <ConteinerLinkPerfil>
                            <LinkPerfil onPress={() => fecharApp()}>Sair</LinkPerfil>
                        </ConteinerLinkPerfil>


                    </ContainerAzul>

                    <StatusBar style="auto" />

                </ScrollView>
        </KeyboardAvoidingView>

    )
}