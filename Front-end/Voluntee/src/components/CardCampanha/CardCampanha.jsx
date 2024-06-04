import { CardBody, DataLocal, DescricaoCard, ImgCard, Info, InfoContainer, TituloCard } from "./Style"

export const CardCampanhaContainer = () => {
    return(
        <></>
    )
}

export const CardCampanha = ({
    titulo ="titulo do card",
    descricao ="descrição do card popular",
    imagem = require('../../assets/images/apresentacao3.png')
}) => {
    return(
        <CardBody>
            <ImgCard
                source={imagem}
            />

            <InfoContainer>
                <Info>
                    <TituloCard>tttttttttttttttttttttttttttttttttt</TituloCard>
                    <DescricaoCard>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</DescricaoCard>
                </Info>

                <DataLocal>
                    
                </DataLocal>
            </InfoContainer>
        </CardBody>
    )
}