import { useState } from 'react';
import { LabelInput } from '../../screens/Perfil/Style';
import { IconCalendar, IconEnvelopeAzul, IconEnvelopeBranco, IconIdCard, IconOlhoCorteAzul, IconOlhoCorteBranco, IconPesquisar, IconUser } from '../Icones/IconesSvg';
import { FormInputBody, FormInsert, FormView, InputBody, InputInsert } from "./Style"
import { TouchableOpacity } from 'react-native';

export const Input = ({
    placeholder,
    placeholderTextColor = '#FBFBFB',
    onChangeText = null,
    fieldValue = null,
    editable = true,
    alter = false,
    icon = "envelope",
    secure,
    style
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleBlur = () => {
      setShowPassword(false); 
    };

    { alter ? placeholderTextColor = "#0066FF" : '#FBFBFB' }

    //icones:
    // <IconUser/> -- user
    // <IconIdCard/> -- idCard
    // <IconPesquisar/> -- search
    // <IconCalendar/> -- calendar
    // <IconOlhoCorteAzul/> -- olhoAzul
    // <IconOlhoCorteBranco/> -- olhoBranco
    // <IconEnvelopeAzul/> -- envelopeAzul
    // <IconEnvelopeBranco/> -- envelopeBranco

    function IconPull(nome) {
        switch (nome) {
            case "user":
                return <IconUser />
                break;
            case "idCard":
                return <IconIdCard />
                break;
            case "search":
                return <IconPesquisar />
                break;
            case "calendar":
                return <IconCalendar />
                break;
            case "olhoAzul":
                return <IconOlhoCorteAzul />
                break;
            case "olhoBranco":
                return <IconOlhoCorteBranco />
                break;
            case "envelopeAzul":
                return <IconEnvelopeAzul />
                break;
            case "envelopeBranco":
                return <IconEnvelopeBranco />
                break;

            default:
                return ""
                break;
        }
    }

    return (
        <InputBody
            alter={alter}
            style={style}
        >
            <InputInsert
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
                placeholder={placeholder}
                editable={editable}
                value={fieldValue}
                alter={alter}
                secureTextEntry={!showPassword && secure}
                onBlur={handleBlur} 
                keyboardType={icon === "idCard" ? "numeric" : "default"}
            />
            <TouchableOpacity onPress={toggleShowPassword}>{IconPull(icon)}</TouchableOpacity>
        </InputBody>
    )
}

export const FormInput = ({
    placeholderTextColor = '#FBFBFB',
    onChangeText = null,
    fieldValue = null,
    editable = true,
    placeholder = "",
    label = ""
}) => {
    return (
        <FormView>
            <LabelInput>{label}</LabelInput>
            <FormInputBody
                alter={true}
            >
                <FormInsert
                    placeholderTextColor={placeholderTextColor}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    editable={editable}
                    value={fieldValue}
                    alter={true}
                />
            </FormInputBody>
        </FormView>
    )
}