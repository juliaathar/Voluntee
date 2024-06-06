import { IconCalendar, IconEnvelopeAzul, IconEnvelopeBranco, IconIdCard, IconOlhoCorteAzul, IconOlhoCorteBranco, IconPesquisar, IconUser } from '../Icones/IconesSvg';
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
                return <IconUser/>
                break;
            case "idCard":
                return <IconIdCard/>
                break;
            case "search":
                return <IconPesquisar/>
                break;
            case "calendar":
                return <IconCalendar/>
                break;
            case "olhoAzul":
                return <IconOlhoCorteAzul/>
                break;
            case "olhoBranco":
                return <IconOlhoCorteBranco/>
                break;
            case "envelopeAzul":
                return <IconEnvelopeAzul/>
                break;
            case "envelopeBranco":
                return <IconEnvelopeBranco/>
                break;
        
            default:
                return ""
                break;
        }
    }
    
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
            {IconPull(icon)}
        </InputBody>
    )
}