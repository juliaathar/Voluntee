import { Button, Text } from "./Style"

export const Botao = ({
    textoBotao = "",
    alter = false,
    disabled = false,
    onPress
}) => {
    return(
        <Button onPress={onPress} alter={alter} disabled={disabled}>
            {disabled ? <ActivityIndicator color="white" /> : <Text alter={alter}>{textoBotao}</Text>}
        </Button>
    )
}