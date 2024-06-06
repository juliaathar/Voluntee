import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ContainerAzul, ConteinerButton } from "../../components/Container/Style";
import { ConteinerBolaMaiorCampanha, ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style";
import { StatusBar } from 'expo-status-bar';
import { ImagePerfil } from '../../components/Header/Style';
import { Paragrafo, ParagrafoCamapanha } from '../../components/Paragrafo/Style';
import { AccountName, ContainerAccount, ContainerCamapnha, ContainerIcones, ContainerParagrafo, ConteinerInfCampanha } from './Style';
import { ImagemCampanha } from '../../components/Imagem/Imagem';
import { TituloH2 } from '../../components/Titulo/Style';
import { HeaderHome } from '../../components/Header/Header';
import { Botao } from '../../components/Botao/Botao';

export const Campanha = () => {
    return (

        <ContainerAzul>

            <HeaderHome
                alter
            />

            <ContainerCamapnha>
                <Paragrafo>Responsável pela campanha</Paragrafo>

                <ContainerAccount>
                    <ImagePerfil source={require('../../assets/images/PerfilTeste.png')} />
                    <AccountName>John doe</AccountName>
                </ContainerAccount>
            </ContainerCamapnha>

            <ConteinerInfCampanha>
                <ConteinerBolaMaiorCampanha>

                    <ImagemCampanha source={require('../../assets/images/ImagemCampanha.png')} />

                    <TituloH2 style={{ top: 10 }} >Chuvas no RS</TituloH2>


                    <Text style={{ fontFamily: "Lexend_600SemiBold", top: 20 }}><FontAwesome6 name="location-dot" size={20} color="#0066FF" />Rio Grande do Sul, Porto Alegre</Text>

                    <Text style={{ fontFamily: "Lexend_600SemiBold", top: 25 }}><Ionicons name="calendar-clear" size={20} color="#0066FF" />27/09 a 09/12</Text>

                    <ContainerParagrafo style={{ top: 20 }}>
                        <View style={{ border: 1, backgroundColor: '#0066FF', width: 2 }}></View>
                        <ParagrafoCamapanha style={{ top: 0 }}>O Rio Grande do Sul foi gravemente afetado por intensas chuvas, causando inundações e deslizamentos que deixaram muitas famílias desabrigadas. Em resposta, lançamos a campanha "Solidariedade em Ação: Juntos pelo Rio Grande do Sul", para arrecadar recursos financeiros, alimentos, roupas e produtos de higiene. Sua contribuição é vital para proporcionar alívio e esperança a quem mais precisa. Participe e ajude-nos a reconstruir as comunidades afetadas. Doe e compartilhe essa mensagem de apoio e união</ParagrafoCamapanha>
                    </ContainerParagrafo>

                    <TituloH2 style={{ fontSize: 18 }}> Aceitamos doações!</TituloH2>

                    <ContainerIcones>
                        <Text><FontAwesome6 name="utensils" size={18} color="#0066FF" />  Alimentos</Text>
                        <Text><FontAwesome6 name="hand-holding-dollar" size={18} color="#0066FF" />  Financeiras</Text>
                        <Text><FontAwesome6 name="shirt" size={18} color="#0066FF" />  Roupas</Text>
                    </ContainerIcones>

                    <ParagrafoCamapanha>Para doar, entre em contato com este email:</ParagrafoCamapanha>

                    <TituloH2 style={{ fontSize: 16 }}> johndoe@gmail.com</TituloH2>

                    <TituloH2 style={{ fontSize: 18, color: "#00000"}}> Veja o local da campanha:</TituloH2>

                    <ConteinerButton>
                        <Botao
                            alter
                            textoBotao='Participe'
                        />
                    </ConteinerButton>

                </ConteinerBolaMaiorCampanha>
            </ConteinerInfCampanha>



            <StatusBar style="auto" />



        </ContainerAzul>



    );

}
