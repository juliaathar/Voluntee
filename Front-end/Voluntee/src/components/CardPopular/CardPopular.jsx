import { Card, Descricao, ImgFundo, NomeCard } from "./Style"

function QuebraPalavra(nome, max = 15) {
    if (nome.length > max) {
        return nome.slice(0, max) + "...";
    }
    return nome;
}

export const SlideCardPopular = () => {
    return(
        <CardsField>
            <FieldName></FieldName>
            <Field>
                //logica vai aqui pra renderizar tudo
            </Field>
        </CardsField>
    )
}

export const CardPopular = ({
    titulo ="titulo do card",
    descricao ="descrição do card popular",
    imagem = require('../../assets/images/apresentacao3.png')
}) => {
    return(
        <Card >
            <ImgFundo source={imagem}>

            <NomeCard>{titulo}</NomeCard>
            <Descricao>{QuebraPalavra(descricao)}</Descricao>
            </ImgFundo>
        </Card>
    )
}