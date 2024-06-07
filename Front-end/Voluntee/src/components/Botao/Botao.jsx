import { Button, TextButton } from "./Style"

export const Botao = ({
    textoBotao = "",
    alter = false,
    disabled = false,
    onPress
}) => {
    return(
        <Button onPress={onPress} alter={alter} disabled={disabled}>
            {disabled ? <ActivityIndicator color="white" /> : <TextButton alter={alter}>{textoBotao}</TextButton>}
        </Button>
    )
}