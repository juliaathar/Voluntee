import styled from "styled-components";

export const ImagemApresentacao = styled.Image`
    width: 100%;
    height: 36%;
    top: 20px;
    align-self: center;
    border: 1px;
`

export const LogoBranca = styled.Image`
    width: 56%;
    height: 12.5%;
    align-self: center;
    //width: 185px;
    //height: 80px;
`

export const LogoAzul = styled(LogoBranca)`
    position: absolute;

    top: 80;
    width: 239px;
    height: 100px;
`

export const LogoAzulLogin = styled(LogoAzul)`
    top: 0;
`

export const IconeBarra = styled.Image`
    width: 58px;
    height: 8px;

    align-self: center;
    margin-top: 10px;
    margin-bottom: 32px;
`


export const ImagemRecupSenha = styled.Image`
    width: 85%;
    height: 25%;
    margin-top: 40px;
    
`

export const ImagemVerifEmail = styled.Image`
    width: 65%;
    height: 25%;
    margin-top: 40px;
    
`

export const ImagemRedefSenha = styled.Image`
    width: 67%;
    height: 30%;
    margin-top: 40px;
    
`

export const ImagemCampanha = styled.Image`
    width: 100%;
    height: 25%;
    border-radius: 20px 20px 0px 0px;
`