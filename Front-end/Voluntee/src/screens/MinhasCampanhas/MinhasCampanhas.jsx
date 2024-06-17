import { ScrollView, View } from "react-native"
import { ContainerAzul } from "../../components/Container/Style"
import { HeaderHome } from "../../components/Header/Header"
import { BotaoDirecionavel, BotaoTexto, BottomConteiner, ConteinerBotoesCampanha, ConteinerCentral, MiddleConteiner } from "./Style"
import { TituloH3 } from "../../components/Titulo/Style"
import { Input } from "../../components/Input/Input"
import { useEffect, useState } from "react"
import api from "../../service/ApiService"
import { BotaoConsulta } from "../../components/BotaoFiltro/BotaoFiltro"
import { Menu } from "../../components/Menu/Menu"
import { userDecodeToken } from "../../utils/Auth"
import { CardMinhasCampanhasList } from "../../components/CardMinhasCampanhas/CardMinhasCampanhas"

export const MinhasCampanhas = ({ navigation, route }) => {
    const [datas, setDatas] = useState()
    const [menu, setMenu] = useState(false)
    const [campanhas, setCampanhas] = useState([])
    const [usuarioId, setUsuarioId] = useState('');
    const [pesquisaCampanha, setpesquisaCampanha] = useState('');

    async function getUserId() {
        try {
            const token = await userDecodeToken();
            setUsuarioId(token.id);
            console.log(token.id);
        } catch (error) {
            console.log(`Erro no token: ${error}`);
        }
    }

    async function ListarCampanhas(idUsuario) {
        try {
            const response = await api.get(`Usuario/ListarPresencasCampanhas?idUsuario=${idUsuario}`)
            console.log("Campanhas:", response.data);
            setCampanhas(response.data)
        } catch (error) {
            console.log(`Erro ao listar campanhas: ${error}`);
        }
    }

    useEffect(() => {
        async function fetchData() {
            await getUserId();
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (usuarioId) {
            ListarCampanhas(usuarioId);
        }
    }, [usuarioId]);

    const filteredCampanhas = campanhas.filter(campanha =>
        campanha.nome.toLowerCase().includes(pesquisaCampanha.toLowerCase())
    );

    return (
        <ContainerAzul>
            <HeaderHome
                onPress={() => setMenu(true)}
                alter
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View>
                    <ConteinerCentral>
                        <TituloH3>
                            Minhas Campanhas
                        </TituloH3>
                        <MiddleConteiner>
                            <Input
                                placeholder="Pesquise"
                                icon="search"
                                onChangeText={text => setpesquisaCampanha(text)}
                            />
                            <ConteinerBotoesCampanha>
                                <BotaoConsulta
                                    textButton={'Todas'}
                                />
                                <BotaoConsulta
                                    textButton={'Participadas'}
                                />
                                <BotaoConsulta
                                    textButton={'Futuras'}
                                />
                            </ConteinerBotoesCampanha>
                        </MiddleConteiner>
                        <BottomConteiner>
                            <CardMinhasCampanhasList
                                dados={filteredCampanhas}
                                scroll={false}
                                navigation={navigation}
                            />
                        </BottomConteiner>
                    </ConteinerCentral>
                </View>
                <Menu
                    visible={menu}
                    onRequestClose={() => setMenu(false)}
                    onBack={() => setMenu(false)}
                />
            </ScrollView>
        </ContainerAzul>
    )
}
