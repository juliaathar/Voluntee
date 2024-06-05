import { Blur, CardBody, CardList, Data, DataLocal, DescricaoCard, ImgCard, Info, InfoContainer, List, ListName, Local, More, ShowMore, TituloCard } from "./Style"
import { FontAwesome6 } from '@expo/vector-icons';

function QuebraPalavra(nome, max = 15) {
    if (nome.length > max) {
        return nome.slice(0, max) + "...";
    }
    return nome;
}

export const CardCampanhaList = ({ dados, onPressMore, scroll }) => {
    return (
        <CardList >
            <ListName>Outras campanhas</ListName>
            <List
                scrollEnable={scroll}
                data={dados}
                keyExtractor={(item) => item.id}
                initialNumToRender={3}
                renderItem={({ item }) =>
                    <CardCampanha
                        titulo={item.titulo}
                        descricao={item.descricao}
                        imagem={item.imagem}
                        datas={item.datas}
                        local={item.local}
                    />
                }
            />
            <ShowMore onPress={onPressMore}>
                <More>Ver mais...</More>
            </ShowMore>
        </CardList>
    )
}

export const CardCampanha = ({
    titulo = "titulo do card",
    descricao = "descrição do card campanha",
    imagem = require('../../assets/images/apresentacao3.png'),
    datas = "inicio - fim",
    local = "informe o local",
    onPress
}) => {
    return (
        <CardBody
            onPress={onPress}
        >

            <ImgCard
                source={imagem}
            >
                <Blur/>
            </ImgCard>


            <InfoContainer>
                <Info>
                    <TituloCard>{QuebraPalavra(titulo, 23)}</TituloCard>
                    <DescricaoCard>{QuebraPalavra(descricao, 80)}</DescricaoCard>
                </Info>

                <DataLocal>
                    <Data>
                        <FontAwesome6 name="calendar-day" size={14} color="#0066FF" /> {datas}
                    </Data>
                    <Local>
                        <FontAwesome6 name="location-dot" size={14} color="#0066FF" /> {local}
                    </Local>
                </DataLocal>
            </InfoContainer>
        </CardBody>
    )
}