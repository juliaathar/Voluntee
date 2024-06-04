import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`

export const ConteinerGeral = styled.View`
    width: 90%;
    /* height: 100%; */
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
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

export const ConteinerCadastro = styled.ScrollView`
    width: 62%;
    height: 76%;

    margin-left: 110px;
    top: 30px;
`

export const ConteinerButton = styled.View`
    width: 90%;
    height: 100px;
`
export const ConteinerLink = styled.TouchableOpacity`
    width: 60%;
    height: 40px;
    align-self: center;
    left: -20px;

    top: 15px;

    justify-content: center;

    flex-direction: row;
`