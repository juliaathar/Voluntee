import { BlurPreto, Card, CardsField, Descricao, Field, FieldName, ImgFundo, NomeCard } from "./Style"

function QuebraPalavra(nome, max = 15) {
    if (nome.length > max) {
        return nome.slice(0, max) + "...";
    }
    return nome;
}

export const CardPopularContainer = ({
    dados
}) => {
    return (
        <CardsField>
            <FieldName>Campanhas populares</FieldName>
            <Field
                horizontal
                data={dados}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <CardPopular
                        titulo={item.titulo}
                        descricao={item.descricao}
                        imagem={item.imagem}
                    />
                }
            />
        </CardsField>
    )
}

export const CardPopular = ({
    titulo = "titulo do card",
    descricao = "descrição do card popular",
    imagem = require('../../assets/images/apresentacao3.png'),
    onPress
}) => {
    return (
        <Card
            onPress={onPress}
        >
            <ImgFundo
                source={imagem}
                imageStyle={{ borderRadius: 20 }}
            >
                <BlurPreto>
                    <NomeCard>{titulo}</NomeCard>
                    <Descricao>{QuebraPalavra(descricao)}</Descricao>
                </BlurPreto>
            </ImgFundo>
        </Card>
    )
}