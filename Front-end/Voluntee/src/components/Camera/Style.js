import styled from "styled-components"

export const Btn = styled.TouchableOpacity`
width: 90%;
height: 55px;
border-radius: 8px;
background-color: #496BBA;
align-items: center;
justify-content: center;
margin-top: 40px;
align-self: center;
`

export const CaixaCamera = styled.View`
flex-direction: row;
padding-left: 15px;
height: 108px;
margin-top: 600px;
background-color: transparent;
gap: 55px;
`

export const BotaoCaptura = styled.TouchableOpacity`
align-items: center;
justify-content: center;
width: 75px;
height: 75px;
background-color: transparent;
border: 3px solid white;
border-radius: 40px;
`
export const BotaoFlip = styled.TouchableOpacity`
align-items: center;
justify-content: center;
padding: 20px;
border-radius: 15px;
`
export const ConfiruracaoBotaoCaptura = styled.View`
width: 100%;
height: 100%;
background-color: white;
border: 3px solid black;
border-radius: 40px;
`
export const BotaoFlash = styled.TouchableOpacity`
align-items: center;
justify-content: center;
width: 70px;
height: 70px;
border-radius: 10px;
background-color: transparent;
margin-top: 5px;
`

export const UltimaFoto = styled.Image`
width: 58px;
height: 58px;
border-radius: 10px;
margin: 28px 16px 0px 10px;
`

export const CaixaDeCima = styled.View`
width: 90%;
height: 70px;
flex-direction: row;
justify-content: space-between;
align-self: center;
margin-top: 50px;
`

export const BotaoRetornaFoto = styled.TouchableOpacity`
width: 70px;
height: 70px;
align-items: center;
justify-content: center;
`