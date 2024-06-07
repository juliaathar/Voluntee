import styled from "styled-components";

export const  Button = styled.TouchableOpacity`
    border-radius: 30px;
    height: 60px;
    width: 100%;
    background-color: ${({ alter }) => (alter ? '#0066FF' : '#FBFBFB')};
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

export const TextButton = styled.Text`
    font-family: 'Lexend_600SemiBold';
    font-size: 20px;
    font-weight: 600;

    text-align: center;
    color: ${({ alter }) => (alter ? '#FBFBFB' : '#0066FF')};
    
`

export const NewConsul = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background-color: #0066FF;
    position: absolute;
    bottom: 20px;
    right: 20px;
    justify-content: center;
    align-items: center;
`
    
    //#FBFBFB branco
    //#0066FF azul