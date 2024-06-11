import styled from "styled-components";

export const ConteinerBolaMaior = styled.View`
    height: 98%;
    width: 180%;

    background-color: #FBFBFB;
    border-radius: 400px;

    align-self: center;
    bottom: -110px;

    position: absolute;
    z-index: -1;
`

export const ConteinerBolaMaiorLogin = styled(ConteinerBolaMaior)`
    background-color: #0066FF;

    position: absolute;
    
    top: 46%;
`

export const ConteinerBolaMenor = styled.View`
    width: 70%;
    height: 35%;

    background-color: #FBFBFB;
    border-radius: 400px;

    top: -20%;
    left: -40%;

    position: absolute;

    padding-top: 45%;
    padding-left: 40%;
`

export const ConteinerIcon = styled.TouchableOpacity`
    top: 38%;
    left: 30%;

    width: 25px;
    height: 25px;
`


export const ConteinerBolaMaiorCampanha = styled.View`
    max-height: 1000px;
    background-color: #FBFBFB;
    border-radius: 20px 20px 0px 0px;
    position: relative;
    z-index: -1;
    align-items: center;
    flex: 1;
`

export const ConteinerBolaMaiorInstituicao = styled.SafeAreaView`
    max-height: 1000px;
    width: 100%;
    background-color: #FBFBFB;
    border-radius: 20px 20px 0px 0px;
    position: relative;
    z-index: -1;
    align-items: center;
    flex: 1;
`