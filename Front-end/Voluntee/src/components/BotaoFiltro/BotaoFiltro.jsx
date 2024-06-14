import { BotaoDirecionavel, BotaoTexto } from "./Style"

export const BotaoConsulta = ({clickButton = false, textButton, onPress}) => {
    return(
        <BotaoDirecionavel clickButton={clickButton} onPress={onPress}>
            <BotaoTexto clickButton={clickButton}>{textButton}</BotaoTexto>
        </BotaoDirecionavel>
    )
}