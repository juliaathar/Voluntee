import { ButtonText, CloseButton, Line, ModalPhoto, PhotoFile, SaveButton } from "./Style"


export const PhotoTaked = ({
    titleButton = "",
    uriPhoto = "",
    visible = false,
    onRequestClose,
    RequestSave
}) => {
    return (
        <ModalPhoto
            isVisible={visible}
        >
            <PhotoFile source={{ uri: `${uriPhoto}` }} />

            <Line>
                <CloseButton onPress={onRequestClose}>
                    <ButtonText>Cancelar</ButtonText>
                </CloseButton>

                <SaveButton onPress={RequestSave}>
                    <ButtonText>{titleButton}</ButtonText>
                </SaveButton>
            </Line>

        </ModalPhoto>
    )
}