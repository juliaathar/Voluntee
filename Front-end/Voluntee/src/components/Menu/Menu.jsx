import { useNavigation } from '@react-navigation/native';
import LogoAzulSvg from "../LogoAzulSvg/LogoAzulSvg";
import { LinkContainer, LinkLetra, LinkMenu, Links, MarBaixo, MarCima, MenuContainer } from "./Style";

export const Menu = ({
    visible,
    onRequestClose,
    onBack
}) => {
    const navigation = useNavigation();

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
                    <LinkMenu>
                        <LinkLetra>Home</LinkLetra>
                    </LinkMenu>
                    <LinkMenu>
                        <LinkLetra>Campanhas</LinkLetra>
                    </LinkMenu>
                    <LinkMenu>
                        <LinkLetra>Instituições</LinkLetra>
                    </LinkMenu>
                    <LinkMenu>
                        <LinkLetra onPress={() => navigation.navigate("Perfil")}>Perfil</LinkLetra>
                    </LinkMenu>
                    <LinkMenu onPress={onRequestClose}>
                        <LinkLetra>Sair</LinkLetra>
                    </LinkMenu>
                </Links>
            </LinkContainer>

            <MarBaixo />
        </MenuContainer>
    );
};