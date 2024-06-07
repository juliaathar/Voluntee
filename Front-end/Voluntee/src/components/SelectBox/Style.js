import styled from "styled-components";
import { TituloH3 } from "../Titulo/Style";
import { Paragrafo } from "../Paragrafo/Style";

export const SubTitulo = styled(TituloH3)`
    font-size: 18px;
    text-align: start;
    margin-bottom: 5px;
`

export const SelectContainer = styled.View`
    width: 90%;
    margin-bottom: 10px;
`

export const ButtonsContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 10px;
    height: 52px;
`

export const ButtonsDoacoes = styled.TouchableOpacity`
    height: 52px;
    width: 45%;
    border-radius: 10px;
    background-color: ${({ actived }) => (actived ? '#FBFBFB' : '#B0CFFD')};
    align-items: center;
    justify-content: center;
`

//checkbox
export const CheckContainer = styled.View`
    height: fit-content;
`

export const CheckLine = styled.TouchableOpacity`
    height: 40px;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
`
export const CheckText = styled(Paragrafo)`
    font-size: 18px;
    top: 0px;
`

export const CheckTouch = styled.View`
    width: 37px;
    height: 37px;
    border: 3px solid #FBFBFB;
    border-radius: 5px;
    margin-right: 10px;
    background-color: ${({ actived }) => (actived ? '#FBFBFB' : 'transparent')};
    align-items: center;
    justify-content: center;
`