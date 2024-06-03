import { HeaderContainer, ImageLogoHeader, ImagePerfil, MenuHam } from "./Style"
import { FontAwesome5 } from '@expo/vector-icons';

export const HeaderHome = () => {
    return (
        <HeaderContainer>
            <MenuHam>
                <FontAwesome5 name="bars" size={30} color="#0066FF" />
            </MenuHam>
            <ImageLogoHeader source={require('../../assets/images/LogoAzul.png')} />
            <ImagePerfil source={require('../../assets/images/PerfilTeste.png')} />
        </HeaderContainer>
    )
}