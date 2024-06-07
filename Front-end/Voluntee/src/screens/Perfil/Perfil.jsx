import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { StyleSheet, View } from "react-native"
import { ContainerAzul, ConteinerGeral } from "../../components/Container/Style"
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style"
import { ButtonPerfil, ConteinerAtrásPerfil, ConteinerImagem, ConteinerInput, ConteinerLinkPerfil, ConteinerPerfil, ConteinerTouchable, FotoPerfil, ImagemMedalha, LabelInput, LinkPerfil, NomePerfil, TituloLevel, TituloPerfil } from './Style';
import { Input } from '../../components/Input/Input';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { TituloH1 } from '../../components/Titulo/Style';
import { Button, TextButton } from '../../components/Botao/Style';

import * as Progress from "react-native-progress"
import { useEffect, useState } from 'react';
import Eduardo from '../Testes/eduardo';

export const Perfil = () => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            // Simulando o progresso aumentando com o tempo
            setProgress(prevProgress => (prevProgress >= 1 ? 0 : prevProgress + 0.1));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
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
                        <Feather name="edit" size={24} color="white" />
                    </ConteinerTouchable>

                </ConteinerAtrásPerfil>

                <ConteinerImagem>

                    <Progress.Bar progress={0.4} width={200} borderColor='#FBFBFB' color='#FBFBFB' />

                    <TituloLevel>20 Level</TituloLevel>



                </ConteinerImagem>

                {/* Bottom */}

                <ConteinerGeral>

                    <ConteinerInput>

                        <LabelInput>Nome</LabelInput>
                        <Input
                            icon=''
                            placeholder='John Doe'
                        >
                        </Input>

                        <LabelInput>E-mail</LabelInput>
                        <Input
                            icon=''
                            placeholder='johndoe@gmail.com'
                        >
                        </Input>

                        <LabelInput>Data de nascimento</LabelInput>
                        <Input
                            icon=''
                            placeholder='2005/03/2024'
                        >
                        </Input>

                        <LabelInput>Cpf</LabelInput>
                        <Input
                            icon=''
                            placeholder='675.578.589-09'
                        >
                        </Input>


                    </ConteinerInput>

                </ConteinerGeral>

                <StatusBar style="auto" />

                <ButtonPerfil>
                    <TextButton>Entrar</TextButton>
                </ButtonPerfil>

                <ConteinerLinkPerfil>
                    <LinkPerfil>Sair</LinkPerfil>
                </ConteinerLinkPerfil>

            </ContainerAzul>


        </ScrollView>
    )
}