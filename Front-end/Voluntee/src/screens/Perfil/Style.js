import styled from "styled-components";
import { TituloH2, TituloH3 } from "../../components/Titulo/Style";

export const ConteinerPerfil = styled.View`
    width: 100%;
    height: 38%;

    position: absolute;
    top: 8%;

    justify-content: space-between;
    align-items: center;
`

export const ConteinerAtrásPerfil = styled.View`
    align-self: flex-end;
    position: static;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    right: 10%;
    top: 110px;
    
    width: 35%;
    height: 50px;
`

export const ImagemMedalha = styled.Image`
    width: 50px;
    height: 50px;
`


export const FotoPerfil = styled.Image`
    width: 190px;
    height: 190px;
`

export const TituloPerfil = styled(TituloH2)`
    font-size: 24px;
`

export const NomePerfil = styled(TituloH3)`
    font-size: 16px;
`


/////////////// Bottom
export const LabelInput = styled.Text`
    font-size: 18px;
    font-family: 'Lexend_400Regular';
    color: #FBFBFB;
    
    top: 16px;
`

export const ConteinerInput = styled.ScrollView`
    width: 110%;
    left: 5%;

    top: 50%;
`