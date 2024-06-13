import { ScrollView } from "react-native"
import { ContainerAzul } from "../../components/Container/Style"
import { HeaderHome } from "../../components/Header/Header"
import { BotaoDirecionavel, BotaoTexto, BottomConteiner, ConteinerBotoesCampanha, ConteinerCentral, MiddleConteiner } from "./Style"
import { TituloH3 } from "../../components/Titulo/Style"
import { Input } from "../../components/Input/Input"
import { CardCampanhaList } from "../../components/CardCampanha/CardCampanha"
import { useEffect, useState } from "react"
import api from "../../service/ApiService"



export const MinhasCampanhas = ({ navigation, route }) => {
    const [campanhas, setCampanhas] = useState([])

    async function ListarCampanhas() {
        await api.get(`/Campanha`)
            .then(async response => {
                console.log("Campanhas:");
                await setCampanhas(response.data)
                //console.log(response.data);
                console.log(campanhas);
            })
            .catch(error => {
                console.log(`Erro ao listar campanhas: ${error}`);
            })
    }

    useEffect(() => {
        ListarCampanhas()
    }, [])

    return (
        <ContainerAzul>
            <HeaderHome
                alter
            />
            <ScrollView>

                <ConteinerCentral>

                    <TituloH3>
                        Minhas Campanhas
                    </TituloH3>

                    <MiddleConteiner>

                        <Input
                            placeholder="Pesquise"
                            icon="search"
                        />

                        <ConteinerBotoesCampanha>

                            <BotaoDirecionavel>
                                <BotaoTexto>Todas</BotaoTexto>
                            </BotaoDirecionavel>

                            <BotaoDirecionavel>
                                <BotaoTexto>Participadas</BotaoTexto>
                            </BotaoDirecionavel>

                            <BotaoDirecionavel>
                                <BotaoTexto>Futuras</BotaoTexto>
                            </BotaoDirecionavel>

                        </ConteinerBotoesCampanha>

                    </MiddleConteiner>

                    <BottomConteiner>
                        <CardCampanhaList
                            dados={campanhas}
                            scroll={false}
                            navigation={navigation}
                        />
                    </BottomConteiner>




                </ConteinerCentral>





            </ScrollView>
        </ContainerAzul>

    )
}