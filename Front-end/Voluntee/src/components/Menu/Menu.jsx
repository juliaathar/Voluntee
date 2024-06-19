import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoAzulSvg from "../LogoAzulSvg/LogoAzulSvg";
import { LinkContainer, LinkLetra, LinkMenu, Links, MarBaixo, MarCima, MenuContainer } from "./Style";

export const Menu = ({
    visible,
    onRequestClose,
    onBack
}) => {
    const navigation = useNavigation();

    async function fecharApp() {
        await AsyncStorage.removeItem('token');
        navigation.replace("Login");
    }

    return (
        <MenuContainer
            isVisible={visible}
            onBackdropPress={onBack}
            animationIn={"slideInLeft"}
            animationOut={"slideOutLeft"}
        >
            <MarCima />

            <LinkContainer>
                <LogoAzulSvg width="170" />

                <Links>
                    <LinkMenu onPress={() => navigation.replace("Home")}>
                        <LinkLetra>Home</LinkLetra>
                    </LinkMenu>
                    <LinkMenu onPress={() => navigation.navigate("MinhasCampanhas")}>
                        <LinkLetra>Minhas Campanhas</LinkLetra>
                    </LinkMenu>
                    <LinkMenu onPress={() => navigation.navigate("Perfil")}>
                        <LinkLetra>Perfil</LinkLetra>
                    </LinkMenu>
                    <LinkMenu onPress={fecharApp}>
                        <LinkLetra>Sair</LinkLetra>
                    </LinkMenu>
                </Links>
            </LinkContainer>

            <MarBaixo />
        </MenuContainer>
    );
};
