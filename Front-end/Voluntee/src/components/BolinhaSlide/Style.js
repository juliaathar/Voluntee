import styled from "styled-components";

export const BolasContainer = styled.View`
    height: 9px;
    width: 60px;
    margin-top: 30px;
    align-self: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const Bolinha = styled.View`
    width: ${({passo}) => (passo ? '8px' : "28px")};
    height: 8px;
    border-radius: 100px;
    border: 1px solid #FBFBFB;
    background-color: #FBFBFB;
`