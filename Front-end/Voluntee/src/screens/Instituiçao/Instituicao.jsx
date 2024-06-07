import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { Text, View } from "react-native";
import { ContainerAzul, ConteinerButton } from "../../components/Container/Style";
import { ConteinerBolaMaiorInstituicao } from "../Cadastro/Style";
import { StatusBar } from 'expo-status-bar';
import { ImagePerfil } from '../../components/Header/Style';
import { Paragrafo, ParagrafoCamapanha } from '../../components/Paragrafo/Style';
import { AccountName, ContainerAccount, ContainerCamapnha, ContainerIcones, ContainerParagrafo, ConteinerInfCampanha } from '../Campanha/Style';
import { ImagemCampanha } from '../../components/Imagem/Imagem';
import { TituloH2 } from '../../components/Titulo/Style';
import { HeaderHome } from '../../components/Header/Header';
import { Botao } from '../../components/Botao/Botao';
import Maps from '../../components/Maps/Maps';

export const Instituicao = () => {
    return (

        <ContainerAzul>

            <HeaderHome
                alter
            />

            <View style={{ height: 50 }}></View>

            <ConteinerInfCampanha>
                <ConteinerBolaMaiorInstituicao>

                    <ImagemCampanha source={require('../../assets/images/WordSkills.png')} />

                    <TituloH2 style={{ top: 10 }} >Chuvas no RS</TituloH2>


                    <Text style={{ fontFamily: "Lexend_600SemiBold", top: 20 }}><FontAwesome6 name="location-dot" size={20} color="#0066FF" />  São Paulo, Brasil</Text>

                    <Text style={{ fontFamily: "Lexend_600SemiBold", top: 25 }}><FontAwesome name="group" size={20} color="#0066FF" />  8090 Funcionarios</Text>

                    <ContainerParagrafo style={{ top: 20 }}>
                        <View style={{ border: 1, backgroundColor: '#0066FF', width: 2 }}></View>
                        <ParagrafoCamapanha style={{ top: 0}}>A WorldSkills é uma organização global dedicada à promoção da excelência em competências profissionais. Fundada em 1950, a instituição organiza competições internacionais onde jovens de diversos países demonstram suas habilidades em diferentes profissões. O objetivo é inspirar e elevar os padrões de formação profissional, fomentando a troca de conhecimentos e melhores práticas entre nações. A WorldSkills também trabalha em parceria com governos, educadores e indústrias para valorizar e desenvolver o ensino técnico e profissionalizante ao redor do mundo.</ParagrafoCamapanha>
                    </ContainerParagrafo>

                    <TituloH2 style={{ fontSize: 18 }}> Aceitamos doações!</TituloH2>

                    <ContainerIcones>

                        <Text><FontAwesome6 name="hand-holding-dollar" size={18} color="#0066FF" />  Financeiras</Text>

                    </ContainerIcones>

                    <ParagrafoCamapanha>Para doar, entre em contato com este email:</ParagrafoCamapanha>

                    <TituloH2 style={{ fontSize: 16 }}> worldskills@gmail.com</TituloH2>


                    <TituloH2 style={{ fontSize: 18, color: "#00000", top: 40 }}> Veja o endereço da instituição:</TituloH2>

                    <Maps />


                </ConteinerBolaMaiorInstituicao>
            </ConteinerInfCampanha>

            <StatusBar style="auto" />

        </ContainerAzul>



    );

}
