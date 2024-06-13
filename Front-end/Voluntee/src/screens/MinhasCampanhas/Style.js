import styled from "styled-components";
import { TextButton } from "../../components/Botao/Style";

export const ConteinerCentral = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 43px;
`

export const MiddleConteiner = styled.View`
    width: 100%;
    align-items: center;
`

export const BottomConteiner = styled.View`
    width: 100%;
    align-items: center;
`

export const ConteinerBotoesCampanha = styled.View`
    width: 100%;
    align-items: center;

    justify-content: space-evenly;
    flex-direction: row;
    
    margin-top: 31px;
`

export const BotaoDirecionavel = styled.TouchableOpacity`
    width: 100px;
    height: 28px;
    border-radius: 500px;
    background-color: #FBFBFB;

    padding: 5px;
`

export const BotaoTexto = styled(TextButton)`
    font-family: 'Lexend_400Regular';
    font-size: 14px;
`