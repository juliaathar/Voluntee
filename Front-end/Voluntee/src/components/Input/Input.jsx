import { FontAwesome5 } from '@expo/vector-icons';
import { InputBody, InputInsert } from "./Style"

export const Input = ({
    placeholder,
    placeholderTextColor = '#FBFBFB',
    onChangeText = null,
    fieldValue = null,
    editable = true,
    alter = false,
    icon = "envelope"
}) => {

    {alter ? placeholderTextColor = "#0066FF" : '#FBFBFB'}

    //icones:
    //calendar
    //envelope
    //eye-slash
    //user-large
    //contact-card
    //search
    
    return(
        <InputBody 
            alter={alter}
        >
            <InputInsert
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
                placeholder={placeholder}
                editable={editable}
                value={fieldValue}
                alter={alter}
            />
            <FontAwesome5 name={icon} size={20} color={alter ? "#0066FF" : '#FBFBFB'} />
        </InputBody>
    )
}