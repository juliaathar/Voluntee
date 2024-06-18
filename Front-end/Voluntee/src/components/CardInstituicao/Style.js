import styled from "styled-components";

export const CardIn = styled.TouchableOpacity`
    width: 100%;
    height: 80px;
    //border: 1px;
    border-radius: 10px;
    margin-bottom: 10PX;
    flex-direction: row;
    justify-content: space-between;
`
export const ImgIns = styled.View`
    height: 100%;
    width: 76px;
    border-radius: 10px;
    flex-direction: row;
    //border: 1px;
`

export const MarkImg = styled.View`
    height: 100%;
    width: 10px;
    border-radius: 10px 0px 0px 10px;
    background-color: #0066FF;
`

export const Img = styled.Image`
    height: 100%;
    width: 65px;
    border-radius: 0px 10px 10px 0px;
`

export const Infos = styled.View`
    width: 75%;
    justify-content: space-between;
    border-radius: 0px 10px 10px 0px;
    //border: 1px;
`
export const InfoTexts = styled.View`
    flex: 0.6;
    justify-content: space-between;
    //border: 1px blue;
`
export const MaskHelp = styled.View`
    width: 40px;
    flex: 0.3;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap:5px;
`