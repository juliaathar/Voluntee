import styled from "styled-components";

export const CardBody = styled.View`
    width: 100%;
    height: 130px;
    //border: 1px solid #0066FF;
    border-radius: 10px 40px 10px 40px;
    flex-direction: row;
`

export const ImgCard = styled.Image`
    width: 30%;
    height: 100%;
    border-radius: 10px 0px 0px 40px;
`
export const InfoContainer = styled.View`
    width: 70%;
    border-radius: 0px 40px 10px 0px;
    border: 1px solid #0066FF;
    align-items: center;
    justify-content: space-evenly;
`
export const Info = styled.View`
    width: 90%;
    height: 65%;
    border: 1px;
`

export const DataLocal = styled.View`   
    width: 90%;
    height: 25%;
    border: 1px;
    align-items: center;
    justify-content: space-between;
`

export const TituloCard = styled.Text`
    font-family: "Lexend_600SemiBold";
    font-size: 16px;
    color: #0066FF;
    
`

export const DescricaoCard = styled.Text`
    font-family: 'Lexend_400Regular';
    font-size: 14px;
`