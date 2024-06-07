import { Button, NewConsul, TextButton } from "./Style"
import Svg, { Path, Ellipse } from 'react-native-svg';

export const Botao = ({
    textoBotao = "",
    alter = false,
    disabled = false,
    onPress
}) => {
    return (
        <Button onPress={onPress} alter={alter} disabled={disabled}>
            {disabled ? <ActivityIndicator color="white" /> : <TextButton alter={alter}>{textoBotao}</TextButton>}
        </Button>
    )
}

export const BotaoConsulta = () => {
    return (
        <NewConsul>
            <Svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M33.45 17C33.45 18.4062 32.2781 19.5781 30.95 19.5781H19.7V30.8281C19.7 32.1562 18.5281 33.25 17.2 33.25C15.7937 33.25 14.7 32.1562 14.7 30.8281V19.5781H3.45C2.04375 19.5781 0.95 18.4062 0.95 17C0.95 15.6719 2.04375 14.5781 3.45 14.5781H14.7V3.32812C14.7 1.92188 15.7937 0.75 17.2 0.75C18.5281 0.75 19.7 1.92188 19.7 3.32812V14.5781H30.95C32.2781 14.5 33.45 15.6719 33.45 17Z" fill="white" />
            </Svg>
        </NewConsul>
    )
}