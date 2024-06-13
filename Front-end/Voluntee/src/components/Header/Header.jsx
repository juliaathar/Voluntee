import { useEffect, useState } from "react";
import api from "../../service/ApiService";
import { userDecodeToken } from "../../utils/Auth";
import LogoAzulSvg from "../LogoAzulSvg/LogoAzulSvg";
import LogoBrancoSvg from "../LogoBrancoSvg/LogoBrancoSvg";
import { HeaderContainer, ImagePerfil, MenuHam } from "./Style"
import { FontAwesome5 } from '@expo/vector-icons';

export const HeaderHome = ({
    alter = false,
    onPress,
    navigation
}) => {
    const [foto,setFoto] =useState("https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png")

    async function CarregarPerfil() {
        const token = await userDecodeToken()

        api.get(`/Usuario/${token.id}`)
        .then(async response =>{
            await setFoto(response.data.Foto)
            console.log(response.data);
        })
        .catch(error =>{
            console.log(`Erro no Header: ${error}`);
            //console.log(token.id);
        })
    }

    useEffect(()=>{
        CarregarPerfil()
    },[])

    return (
        <HeaderContainer>
            <MenuHam onPress={onPress}>
                <FontAwesome5 name="bars" size={30} color={alter ? "#FBFBFB" : "#0066FF"} />
            </MenuHam>

            {alter ? <LogoBrancoSvg width="120" height="50" /> : <LogoAzulSvg width="120" height="50" />}

            <MenuHam onPress={() => navigation.navigate("Perfil")}>
                <ImagePerfil source={{uri: foto}} />
            </MenuHam>
        </HeaderContainer>
    )
}