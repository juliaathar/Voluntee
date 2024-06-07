import styled from "styled-components";
import { TituloH2, TituloH3 } from "../../components/Titulo/Style";
import { Container, ConteinerLink } from "../../components/Container/Style";
import { Button } from "../../components/Botao/Style";

export const ConteinerPerfil = styled.View`
    width: 110%;
    height: 290px;

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

    position: absolute;

    right: 24%;
    top: 29%;
    
    width: 32%;
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
    top: 0px;
`

export const NomePerfil = styled(TituloH3)`
    font-size: 16px;
`

export const ConteinerImagem = styled.View`
    width: 100%;

    position: absolute;
    
    top: 38%;
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
    height: 600px;
    left: 5%;

    margin-top: 60%;
    top: 28%;
`

export const ButtonPerfil = styled(Button)`
    margin-bottom: 36px;
    margin-top: 15%;
    
    width: 90%;
`

export const LinkPerfil = styled.Text`
    font-family: 'Lexend_400Medium';
    font-size: 18px;
    color: #FBFBFB;
`

export const ConteinerLinkPerfil = styled.TouchableOpacity`
    width: 100%;
    
    align-items: center;

    margin-bottom: 20px;
`

/////////////// Conteiner Para Barra de Progresso

export const ConteinerBarraDeProgresso1 = styled.View`
    height: 20px;
    width: 10px;

    border: 1px solid red;
    border-radius: 50px;

    /* transform: rotate(45deg); */
    /* transform: skew(45deg); */
    transform: scaleX(2);
    transform: scaleY(1);

    transform: skewX(30deg);
    transform: skewY(30deg);
`

export const ConteinerBarraDeProgresso2 = styled(ConteinerBarraDeProgresso1)`
    
`

export const ConteinerBarraDeProgresso3 = styled(ConteinerBarraDeProgresso1)`

`

export const ConteinerBarraDeProgresso4 = styled(ConteinerBarraDeProgresso1)`

`

export const ConteinerParaBarra = styled.View`
    height: 20%;
    width: 100%;

    position: absolute;

    border: 1px solid black;

    align-items: center;
    justify-content: center;
`