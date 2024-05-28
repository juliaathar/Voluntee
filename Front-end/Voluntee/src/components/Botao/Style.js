import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    border-radius: 30px;
    height: 60px;
    width: 90%;
    background-color: ${({alter}) => (alter ? '#0066FF' : '#FBFBFB')};
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`

export const Text = styled.Text`
    font-size: 20px;
    text-align: center;
    color: ${({alter}) => (alter ? '#FBFBFB' : '#0066FF')};
    
`

//#FBFBFB branco
//#0066FF azul