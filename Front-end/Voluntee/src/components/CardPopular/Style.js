import styled from "styled-components";

//card popular
export const Card = styled.TouchableOpacity`
    width: 197px;
    height: 217px;
    border-radius: 20px;
    margin-right: 10px;
    //margin-left: 5px;
`
export const ImgFundo = styled.ImageBackground`
    justify-content: flex-end;
    align-items: center;
    border-radius: 20px;
    width: 100%;
    height: 100%;
`

export const BlurPreto = styled.View`
    background-color: rgba(0,0,0, 0.4);
    border-radius: 20px;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
`

export const Descricao = styled.Text`
    font-family: 'Lexend_400Regular';
    font-size: 14px;
    color: #FFFFFF;
    margin-bottom: 8px;
`

export const NomeCard = styled.Text`
    font-family: 'Lexend_700Bold';
    font-size: 18px;
    color: #FFFFFF;
`

//container de card popular
export const CardsField = styled.View`
    width: 90%;
    height: 260px;
    margin-top: 30px;
`

export const FieldName = styled.Text`
    font-family: "Lexend_600SemiBold";
    font-size: 18px;
    color: #FBFBFB;
    margin-bottom: 15px;
`
export const Field = styled.FlatList`
    width: 100%;
    height: 200px;
`