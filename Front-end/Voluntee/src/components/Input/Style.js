import styled from "styled-components";

export const InputBody = styled.View`
    height: 60px;
    width: 90%;
    border-radius: 30px;
    margin-top: 20px;
    border: 2px solid;
    border-color: ${({alter}) => (alter ? '#0066FF' : '#FBFBFB')};
    align-items: center;
    flex-direction: row;
`

export const InputInsert = styled.TextInput`
    height:100%;
    width: 87%;
    padding:10px 10px;
    text-align: justify;
    font-size: 18px;
    color: ${({alter}) => (alter ? '#0066FF' : '#FBFBFB')};
`



//#FBFBFB branco
//#0066FF azul