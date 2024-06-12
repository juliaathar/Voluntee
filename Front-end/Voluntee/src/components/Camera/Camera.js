import { FontAwesome6 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import * as MediaLibrary from 'expo-media-library'

import { useEffect, useRef, useState } from "react"
import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native"

import { CameraView, useCameraPermissions } from 'expo-camera';

import { TextLink } from '../Link/Link';
import { TextButton } from '../Botao/Style';
import { Container } from '../Container/Style';
import { BotaoCaptura, BotaoFlash, BotaoFlip, BotaoRetornaFoto, Btn, CaixaCamera, CaixaDeCima, ConfiruracaoBotaoCaptura } from './Style';


export const CameraPhoto = ({ navigation, route }) => {
    const cameraRef = useRef(null)
    const [photo, setPhoto] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [tipoCamera, setTipoCamera] = useState('front')
    const [LigaFlash, setLigaFlash] = useState('off')
    const [latestPhoto, setLatestPhoto] = useState(null)

    const [cameraPermission, requestCameraPermissions] = useCameraPermissions();
    const [mediaPermission, requestMediaPermissions] = MediaLibrary.usePermissions();


    async function capturaFoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync({ quality: 1 })
            setPhoto(photo.uri)
            setOpenModal(true)
        }
    }

    async function onPressEnviar() {
        await setOpenModal(false)
        route.params.isProfile ? navigation.navigate("Perfil", { photoUri: photo }) : navigation.navigate("Perfil", { photoUri: photo })

    }

    async function ultimaFoto () {
        const { assets } = await MediaLibrary.getAssetsAsync({ sortBy: [[MediaLibrary.SortBy.creationTime, false]], first: 1 })


        if (assets.length > 0) {
            const infoAssets = await MediaLibrary.getAssetInfoAsync(assets[0].id)

            setLatestPhoto(infoAssets.localUri)
        }
    }

    async function SelecionaImagemGaleria() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1
        });

        if (!result.canceled) {
            setPhoto(result.assets[0].uri)
            setOpenModal(true)
        }
    }

    useEffect(() => {
        (async () => {
            if (cameraPermission && !cameraPermission.granted) {
                await useCameraPermissions();
            }

            if (MediaLibrary.PermissionStatus.DENIED) {
                await requestMediaPermissions();
            }
        })();
    }, [])

    // useEffect(() => {
    //     if (route.params) {
    //         ultimaFoto ()
    //     }
    // }, [])
    return (
        <Container>
            <CameraView
                ref={cameraRef}
                facing={tipoCamera}
                style={styles.camera}
                flash={LigaFlash}
            >
                <CaixaDeCima>
                    <BotaoFlash onPress={() => setLigaFlash(flashOn == 'on' ? 'off' : 'on')}>
                        <Ionicons name={LigaFlash === 'on' ? "flash" : "flash-off"} size={42} color={LigaFlash === 'on' ? "yellow" : "white"} />
                    </BotaoFlash>
                </CaixaDeCima>
                <CaixaCamera>
                    <TouchableOpacity onPress={() => SelecionaImagemGaleria()}>
                        {
                            latestPhoto != null ?
                                (
                                    <LastPhoto source={{ uri: latestPhoto }} />
                                ) : null
                        }
                    </TouchableOpacity>


                    <BotaoCaptura onPress={() => capturaFoto()}>
                        <ConfiruracaoBotaoCaptura></ConfiruracaoBotaoCaptura>
                    </BotaoCaptura>

                    <BotaoFlip onPress={() => setTipoCamera(tipoCamera == 'front' ? 'back' : 'front')}>
                        <FontAwesome6 name="camera-rotate" size={45} color="white" />
                    </BotaoFlip>

                </CaixaCamera>
            </CameraView>


            <Modal
                animationType='slide'
                transparent={false}
                visible={openModal}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
                    <Image
                        style={{ width: '100%', height: 500, borderRadius: 10 }}
                        source={{ uri: photo }}
                    />
                    <Btn onPress={() => onPressEnviar()}>
                        <TextButton >ENVIAR</TextButton>
                    </Btn>

                    <TextLink onPress={() => setOpenModal(false)}>Refazer</TextLink>
                </View>

            </Modal>
        </Container>
    )
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        height: '80%',
        width: '100%',
    }
})