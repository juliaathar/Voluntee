import styled from "styled-components";

export const Container = styled.SafeAreaView`
    background-color: ${({color}) => (color)};
    flex: 1;
    align-items: center;
`

export const ConteinerGeral = styled.View`
    /* height:80%;  */
    width: 90%;
    justify-content: space-between;
    align-items: center;
`

export const ConteinerText = styled.View`
    width: 100%;
    height: 130px;

    margin-top: 40px;

    align-items: center;
    justify-content: center;
`

export const ConteinerBottom = styled.View`
    height: 120px;
    width: 100%;
    top: 20px;
`