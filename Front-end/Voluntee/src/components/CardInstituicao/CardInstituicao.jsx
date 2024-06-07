import { CardIn, Img, ImgIns, InfoTexts, Infos, MarkImg, MaskHelp } from "./Style"
import { CardList, DescricaoCard, List, ListName, More, ShowMore, TituloCard } from "../CardCampanha/Style"
import { FontAwesome6 } from '@expo/vector-icons';

function QuebraPalavra(nome, max = 15) {
    if (nome.length > max) {
        return nome.slice(0, max) + "...";
    }
    return nome;
}

export const CardInstituicaoList = ({ dados, onPressMore, scroll }) => {
    return (
        <CardList style={{height: 320, marginBottom: 90}} >
            <ListName>Instituições que aceitam doações</ListName>
            <List
                scrollEnable={scroll}
                data={dados}
                keyExtractor={(item) => item.id}
                initialNumToRender={3}
                renderItem={({ item }) =>
                    <CardInstituicao
                        titulo={item.titulo}
                        descricao={item.descricao}
                        imagem={item.imagem}
                    />
                }
            />
            <ShowMore onPress={onPressMore}>
                <More>Ver mais...</More>
            </ShowMore>
        </CardList>
    )
}

export const CardInstituicao = ({
    titulo = "titulo do card",
    descricao = "descrição do card campanha",
    imagem = require('../../assets/images/ImgTesteCard.png'),
}) => {
    return (
        <CardIn>
            <ImgIns>
                <MarkImg/>
                <Img source={imagem}/>
            </ImgIns>

            <Infos>
                <InfoTexts>
                    <TituloCard>{QuebraPalavra(titulo, 25)}</TituloCard>
                    <DescricaoCard>{QuebraPalavra(descricao, 35)}</DescricaoCard>
                </InfoTexts>

                <MaskHelp>
                    <FontAwesome6 name="utensils" size={14} color="#0066FF" />
                    <FontAwesome6 name="hand-holding-dollar" size={14} color="#0066FF" />
                    <FontAwesome6 name="shirt" size={14} color="#0066FF" />
                </MaskHelp>
            </Infos>
        </CardIn>
    )
}