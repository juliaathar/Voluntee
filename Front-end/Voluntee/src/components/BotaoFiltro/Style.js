import { styled } from "styled-components";

export const ConteinerBotoesCampanha = styled.View`
    width: 100%;
    align-items: center;

    justify-content: space-evenly;
    flex-direction: row;
    
    margin-top: 31px;
`

export const BotaoDirecionavel = styled.TouchableOpacity`
    width: 28%;
    height: 100%;
    border-radius: 500px;
    padding: 5px;
`

export const BotaoTexto = styled.Text`
    font-family: 'Lexend_400Regular';
    font-size: 14px;
    color: ${({ alter }) => (alter ? '#FBFBFB' : '#0066FF')};
    font-family: 'Lexend_600SemiBold';
    text-align: center;
`