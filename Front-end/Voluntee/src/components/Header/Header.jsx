import LogoAzulSvg from "../LogoAzulSvg/LogoAzulSvg";
import LogoBrancoSvg from "../LogoBrancoSvg/LogoBrancoSvg";
import { HeaderContainer, ImagePerfil, MenuHam } from "./Style"
import { FontAwesome5 } from '@expo/vector-icons';

export const HeaderHome = ({
    alter = false,
    imagem = require('../../assets/images/PerfilTeste.png'),
    onPress,
    navigation
}) => {

    return (
        <HeaderContainer>
            <MenuHam onPress={onPress}>
                <FontAwesome5 name="bars" size={30} color={alter ? "#FBFBFB" : "#0066FF"} />
            </MenuHam>

            {alter ? <LogoBrancoSvg width="120" height="50" /> : <LogoAzulSvg width="120" height="50" />}

            <MenuHam onPress={() => navigation.navigate("Perfil")}>
                <ImagePerfil source={imagem} />
            </MenuHam>
        </HeaderContainer>
    )
}