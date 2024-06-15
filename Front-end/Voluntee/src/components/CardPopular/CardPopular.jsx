import { useState } from "react";
import { BlurPreto, Card, CardsField, Descricao, Field, FieldName, ImgFundo, NomeCard } from "./Style"
import moment from "moment";

function QuebraPalavra(nome, max = 15) {
    if (nome.length > max) {
        return nome.slice(0, max) + "...";
    }
    return nome;
}

export const CardPopularContainer = ({
    navigation, 
    dados, 
    onPressMore, 
    scroll
}) => {
    const [profileData, setProfileData] = useState('')
    return (
        <CardsField>
            <FieldName>Campanhas populares</FieldName>
            <Field
                horizontal
                data={dados}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <CardPopular
                        titulo={item.nome}
                        descricao={item.descricao}
                        imagem={item.imagem}
                        latitude={item.latitude}
                        longitude={item.longitude}
                        onPress={() => navigation.navigate('Campanha', { 
                            profileData: profileData, 
                            idCampanha: item.id,
                            titulo: item.nome,
                            email: item.email,
                            descricao: item.descricao,
                            imagem: item.imagem,
                            datas: `${moment(item.dataInicio).format('DD/MM/YYYY')} - ${moment(item.dataEncerramento).format('DD/MM/YYYY')}`,
                            local: item.local,
                            dinheiro:item.dinheiro,
                            alimento:item.alimento,
                            roupas:item.roupas,
                            latitude: item.latitude,
                            longitude: item.longitude
                        })}
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
                source={{uri: imagem}}
                imageStyle={{ borderRadius: 20 }}
            >
                <BlurPreto>
                    <NomeCard>{QuebraPalavra(titulo)}</NomeCard>
                    <Descricao>{QuebraPalavra(descricao)}</Descricao>
                </BlurPreto>
            </ImgFundo>
        </Card>
    )
}