import { BolasContainer, Bolinha } from "./Style"

export const BolinhaSlide = ({passo = 1}) => {

    
    return(
        <BolasContainer>
            <Bolinha passo={passo == 1 ? false : true} />
            <Bolinha passo={passo == 2 ? false : true} />
            <Bolinha passo={passo == 3 ? false : true} />
        </BolasContainer>
    )
}