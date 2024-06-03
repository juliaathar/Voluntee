import styled from "styled-components";

export const Link = styled.Text`
    font-family: 'Lexend_400Regular';
    font-size: 16px;
    color: ${({ alter }) => (alter ? '#FBFBFB' : '#0066FF')};

    text-decoration: underline;

    left: 5px;
`

export const TextLink = styled.Text`
    font-family: 'Lexend_400Regular';
    font-size: 16px;
    color: ${({ alter }) => (alter ? '#FBFBFB' : '#6B6B6B')};
`