import styled from "styled-components";
import { CardsField, FieldName } from "../CardPopular/Style";

//card
export const CardBody = styled.TouchableOpacity`
    width: 100%;
    height: 130px;
    //border: 1px solid #0066FF;
    border-radius: 10px 40px 10px 40px;
    flex-direction: row;
    margin-bottom: 10PX;
`

export const ImgCard = styled.ImageBackground`
    flex: 1;
    height: 100%;
    border-radius: 10px 0px 0px 40px;
    overflow: hidden;

`

export const Blur = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 10px 0px 0px 40px;
    background-color: rgba(0,0,0, 0.3);
`

export const InfoContainer = styled.View`
    width: 70%;
    border-radius: 0px 40px 10px 0px;
    //border-left-color: transparent;
    border: 1px #FFFFFF;
    align-items: center;
    justify-content: space-evenly;
`
export const Info = styled.View`
    width: 92%;
    height: 55%;
    //border: 1px;
`

export const DataLocal = styled.View`
    width: 92%;
    height: 25%;
    //border: 1px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const TituloCard = styled.Text`
    font-family: "Lexend_600SemiBold";
    font-size: 16px;
    color: ${({ alter }) => (alter ? '#FBFBFB' : '#0066FF')};

`

export const DescricaoCard = styled.Text`
    font-family: 'Lexend_400Regular';
    font-size: 14px;
    color: ${({ alter }) => (alter ? '#FBFBFB' : '#1E1E1E')};
`

export const Data = styled(DescricaoCard)`
    font-size: 12px;
    color:#FFFFFF;
`
export const Local = styled(Data)``

//flatlist de cards
export const CardList = styled.View`
    width: 90%;
    margin-top: 30px;
    height: 100%;
    margin-bottom: 20px;
    
`

export const ListName = styled(FieldName)`
    color: #0066FF;
`