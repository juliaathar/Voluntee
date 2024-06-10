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
import { Menu } from '../../components/Menu/Menu';
import { useState } from 'react';

export const Instituicao = ({ route, navigation }) => {
    const { titulo, descricao, imagem, funcionarios, local, email, alimento, dinheiro, roupas } = route.params;

    const [menu, setMenu] = useState(false)
    return (

        <ContainerAzul>

            <HeaderHome
                alter
                onPress={() => setMenu(true)}
            />

            <View style={{ height: 50 }}></View>

            <ConteinerInfCampanha>
                <ConteinerBolaMaiorInstituicao>

                    <ImagemCampanha source={{ uri: imagem }} />

                    <TituloH2 style={{ top: 10 }} >{titulo}</TituloH2>


                    <Text style={{ fontFamily: "Lexend_600SemiBold", top: 20 }}><FontAwesome6 name="location-dot" size={20} color="#0066FF" /> {local}</Text>

                    <Text style={{ fontFamily: "Lexend_600SemiBold", top: 25 }}><FontAwesome name="group" size={20} color="#0066FF" />  {funcionarios} Funcionários</Text>

                    <ContainerParagrafo style={{ top: 20 }}>
                        <View style={{ border: 1, backgroundColor: '#0066FF', width: 2 }}></View>
                        <ParagrafoCamapanha style={{ top: 0}}>{descricao}</ParagrafoCamapanha>
                    </ContainerParagrafo>

                    <TituloH2 style={{ fontSize: 18 }}> Aceitamos doações!</TituloH2>

                    <ContainerIcones>
                        {alimento ? <Text><FontAwesome6 name="utensils" size={18} color="#0066FF" />  Alimentos</Text> : null}
                        {dinheiro ? <Text><FontAwesome6 name="hand-holding-dollar" size={18} color="#0066FF" />  Financeiras</Text> : null}
                        {roupas ?   <Text><FontAwesome6 name="shirt" size={18} color="#0066FF" />  Roupas</Text> : null}
                    </ContainerIcones>

                    <ParagrafoCamapanha>Para doar, entre em contato com este email:</ParagrafoCamapanha>

                    <TituloH2 style={{ fontSize: 16 }}> {email}</TituloH2>


                    <TituloH2 style={{ fontSize: 18, color: "#00000", top: 40 }}> Veja o endereço da instituição:</TituloH2>

                    <Maps />

                </ConteinerBolaMaiorInstituicao>
            </ConteinerInfCampanha>

            <Menu
                visible={menu}
                onRequestClose={() => setMenu(false)}
                onBack={() => setMenu(false)}
            />

            <StatusBar style="auto" />

        </ContainerAzul>



    );

}
