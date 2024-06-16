import { useState } from 'react';
import { LabelInput } from '../../screens/Perfil/Style';
import { IconCalendar, IconEnvelopeAzul, IconEnvelopeBranco, IconIdCard, IconOlhoAzul, IconOlhoBranco, IconOlhoCorteAzul, IconOlhoCorteBranco, IconPesquisar, IconUser } from '../Icones/IconesSvg';
import { FormInputBody, FormInsert, FormView, InputBody, InputInsert } from "./Style";
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

    if (alter) placeholderTextColor = "#0066FF";

    function IconPull(nome) {
        switch (nome) {
            case "user":
                return <IconUser />;
            case "idCard":
                return <IconIdCard />;
            case "search":
                return <IconPesquisar />;
            case "calendar":
                return <IconCalendar />;
            case "olhoAzul":
                return <IconOlhoCorteAzul />;
            case "olhoBranco":
                return <IconOlhoCorteBranco />;
            case "envelopeAzul":
                return <IconEnvelopeAzul />;
            case "envelopeBranco":
                return <IconEnvelopeBranco />;
            default:
                return "";
        }
    }

    const renderIcon = () => {
        if (secure && icon === 'olhoBranco') {
            return showPassword ? <IconOlhoBranco /> : <IconOlhoCorteBranco />;
        } else if (secure && icon === 'olhoAzul') {
            return showPassword ? <IconOlhoAzul /> : <IconOlhoCorteAzul />;
        } else {
            return IconPull(icon);
        }
    };

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
            {secure ? (
                <TouchableOpacity onPress={toggleShowPassword}>
                    {renderIcon()}
                </TouchableOpacity>
            ) : (
                IconPull(icon)
            )}
        </InputBody>
    );
};

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
    );
};
