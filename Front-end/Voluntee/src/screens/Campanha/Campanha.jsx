import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { StyleSheet, Text, View } from "react-native";
import { Container } from "../../components/Container/Style";
import { ConteinerBolaMaiorCampanha, ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style";
import { StatusBar } from 'expo-status-bar';
import { ImagePerfil } from '../../components/Header/Style';
import { Paragrafo, ParagrafoCamapanha } from '../../components/Paragrafo/Style';
import { AccountName, ContainerAccount, ContainerCamapnha, ContainerParagrafo } from './Style';
import { ImagemCampanha } from '../../components/Imagem/Imagem';
import { TituloH2 } from '../../components/Titulo/Style';

export const Campanha = () => {
    return (
        <Container style={styles.container}>



            <ConteinerBolaMenor>
                <ConteinerIcon>
                    <AntDesign name="left" size={26} color="#0066FF" z-index='1' />
                </ConteinerIcon>
            </ConteinerBolaMenor>

            <ContainerCamapnha>
                <Paragrafo>Responsável pela campanha</Paragrafo>

                <ContainerAccount>
                    <ImagePerfil source={require('../../assets/images/PerfilTeste.png')} />
                    <AccountName>John doe</AccountName>
                </ContainerAccount>
            </ContainerCamapnha>

            <ConteinerBolaMaiorCampanha>
                <ImagemCampanha source={require('../../assets/images/ImagemCampanha.png')} />

                <TituloH2>Chuvas no RS</TituloH2>

                <Text style={{fontFamily:"Lexend_600SemiBold"}}><FontAwesome6 name="location-dot" size={20} color="#0066FF" />Rio Grande do Sul, Porto Alegre</Text>

                <Text style={{fontFamily:"Lexend_600SemiBold"}}><Ionicons name="calendar-clear" size={20} color="#0066FF" />27/09 a 09/12</Text>

                <ContainerParagrafo>
                    <View style={{border:1, backgroundColor:'#0066FF', width:2}}></View>
                    <ParagrafoCamapanha style={{top:0}}>O Rio Grande do Sul foi gravemente afetado por intensas chuvas, causando inundações e deslizamentos que deixaram muitas famílias desabrigadas. Em resposta, lançamos a campanha "Solidariedade em Ação: Juntos pelo Rio Grande do Sul", para arrecadar recursos financeiros, alimentos, roupas e produtos de higiene. Sua contribuição é vital para proporcionar alívio e esperança a quem mais precisa. Participe e ajude-nos a reconstruir as comunidades afetadas. Doe e compartilhe essa mensagem de apoio e união</ParagrafoCamapanha>
                </ContainerParagrafo>
            </ConteinerBolaMaiorCampanha>



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