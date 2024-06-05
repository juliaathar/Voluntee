import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { StyleSheet, View } from "react-native"
import { TituloH1 } from "../../components/Titulo/Style"
import { ConteinerGeral } from "../../components/Container/Style"
import { ConteinerBolaMenor, ConteinerIcon } from "../Cadastro/Style"
import { ConteinerAtrásPerfil, ConteinerInput, ConteinerPerfil, FotoPerfil, ImagemMedalha, LabelInput, NomePerfil, TituloPerfil } from './Style';
import { Input } from '../../components/Input/Input';
import { StatusBar } from 'expo-status-bar';

export const Perfil = () => {
    return (

        <View style={styles.container}>

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

                <Feather name="edit" size={24} color="white" />
            </ConteinerAtrásPerfil>


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

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0066FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
})