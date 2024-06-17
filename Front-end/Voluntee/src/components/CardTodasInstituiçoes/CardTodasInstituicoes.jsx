import { CardIn, Img, ImgIns, InfoTexts, Infos, MarkImg, MaskHelp } from "./Style";
import { CardList, DescricaoCard, ListName, TituloCard } from "../CardCampanha/Style";
import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from "react";

function QuebraPalavra(nome, max = 15) {
    if (nome.length > max) {
        return nome.slice(0, max) + "...";
    }
    return nome;
}

export const CardTodasInstituicaoList = ({ navigation, dados, onPressMore, scroll }) => {
    const [profileData, setProfileData] = useState('');

    return (
        <CardList tamanho={dados.length}>
            <ListName>Instituições que aceitam doações</ListName>
            {dados.map((item) => (
                <CardInstituicao
                    key={item.id}
                    titulo={item.nome}
                    descricao={item.descricao}
                    imagem={item.imagem}
                    dinheiro={item.dinheiro}
                    alimento={item.alimento}
                    roupas={item.roupas}
                    latitude={item.latitude}
                    longitude={item.longitude}
                    onPress={() => navigation.navigate('Instituicao', { 
                        profileData: profileData, 
                        idCampanha: item.id,
                        titulo: item.nome,
                        email: item.email,
                        descricao: item.descricao,
                        imagem: item.imagem,
                        funcionarios: item.funcionarios,
                        local: item.local,
                        dinheiro: item.dinheiro,
                        alimento: item.alimento,
                        roupas: item.roupas,
                        latitude: item.latitude,
                        longitude: item.longitude
                    })}
                />
            ))}
        </CardList>
    );
};

export const CardInstituicao = ({
    titulo = "titulo do card",
    descricao = "descrição do card campanha",
    imagem = require('../../assets/images/ImgTesteCard.png'),
    dinheiro = false,
    alimento = false,
    roupas = false,
    onPress,
}) => {
    return (
        <CardIn onPress={onPress}>
            <ImgIns>
                <MarkImg />
                <Img source={{ uri: imagem }} />
            </ImgIns>

            <Infos>
                <InfoTexts>
                    <TituloCard alter>{QuebraPalavra(titulo, 25)}</TituloCard>
                    <DescricaoCard alter>{QuebraPalavra(descricao, 35)}</DescricaoCard>
                </InfoTexts>

                <MaskHelp>
                    {alimento ? <FontAwesome6 name="utensils" size={14} color="#ffffff" /> : null} 
                    {dinheiro ? <FontAwesome6 name="hand-holding-dollar" size={14} color="#ffffff" /> : null} 
                    {roupas ? <FontAwesome6 name="shirt" size={14} color="#ffffff" /> : null} 
                </MaskHelp>
            </Infos>
        </CardIn>
    );
};
