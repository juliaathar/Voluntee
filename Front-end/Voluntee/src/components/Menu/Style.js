import styled from "styled-components";
import Modal from "react-native-modal";

export const MenuContainer = styled(Modal)`
    width: 70%;
    height: 100%;
    background-color: #FBFBFB;
    position: absolute;
    justify-content: space-between;
    margin: 0px;
`

export const MarCima = styled.View`
    width: 100%;
    height: 25%;
    background-color: #0066FF;
    border-radius: 0px 0px 0px 130px;
`

export const MarBaixo = styled(MarCima)`
    border-radius: 0px 130px 0px 0px;
`

export const LinkContainer = styled.View`
    height: 50%;
    align-items: center;
    //border: 1px;
`

export const Links = styled.View`
    justify-content: space-between;
    height: 70%;
    //border: 1px;
`

export const LinkMenu = styled.TouchableOpacity`
    align-items: center;
    margin-bottom: 10px;
`

export const LinkLetra = styled.Text`
    color: #0066FF;
    font-family: "Lexend_600SemiBold";
    font-size: 25px;
`