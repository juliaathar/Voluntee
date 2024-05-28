import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    border-radius: 30px;
    height: 60px;
    width: 100%;
    background-color: ${({ alter }) => (alter ? '#0066FF' : '#FBFBFB')};
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`

export const TextButton = styled.Text`
    font-family: 'Lexend';
    font-size: 20px;
    font-weight: 600;

    text-align: center;
    color: ${({ alter }) => (alter ? '#FBFBFB' : '#0066FF')};
    
`

//#FBFBFB branco
//#0066FF azul