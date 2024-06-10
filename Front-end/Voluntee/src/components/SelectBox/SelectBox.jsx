import { ButtonsDoacoes, CheckLine, CheckText, CheckTouch, } from "./Style"
import { Verificado } from "../Icones/IconesSvg"
import { TextButton } from "../Botao/Style"

export const BotaoDoacao = ({ textButton, actived, onPress }) => {
    return (
        <ButtonsDoacoes onPress={onPress} actived={actived}>
            <TextButton>{textButton}</TextButton>
        </ButtonsDoacoes>
    )
}

export const CheckBox = ({ textButton, actived, onPress }) => {
    return (
        <CheckLine onPress={onPress}>
            <CheckTouch actived={actived}>
                <Verificado/> 
            </CheckTouch>
            <CheckText>{textButton}</CheckText>
        </CheckLine>
    )
}