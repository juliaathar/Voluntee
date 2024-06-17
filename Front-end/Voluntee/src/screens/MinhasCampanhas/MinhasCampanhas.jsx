import { ScrollView, View } from "react-native";
import { ContainerAzul } from "../../components/Container/Style";
import { HeaderHome } from "../../components/Header/Header";
import { BotaoConsulta } from "../../components/BotaoFiltro/BotaoFiltro";
import { Menu } from "../../components/Menu/Menu";
import { userDecodeToken } from "../../utils/Auth";
import { CardMinhasCampanhasList } from "../../components/CardMinhasCampanhas/CardMinhasCampanhas";
import { TituloH3 } from "../../components/Titulo/Style";
import { Input } from "../../components/Input/Input";
import { useEffect, useState } from "react";
import api from "../../service/ApiService";
import { ConteinerBotoesCampanha, ConteinerCentral, MiddleConteiner, BottomConteiner } from "./Style";
import { format, isAfter, isBefore } from "date-fns";

export const MinhasCampanhas = ({ navigation, route }) => {
    const [datas, setDatas] = useState();
    const [menu, setMenu] = useState(false);
    const [campanhas, setCampanhas] = useState([]);
    const [usuarioId, setUsuarioId] = useState('');
    const [pesquisaCampanha, setpesquisaCampanha] = useState('');
    const [filter, setFilter] = useState('todas');

    async function getUserId() {
        try {
            const token = await userDecodeToken();
            setUsuarioId(token.id);
            console.log("Usuário ID:", token.id); // Log do ID do usuário
        } catch (error) {
            console.log(`Erro no token: ${error}`);
        }
    }

    async function ListarCampanhas(idUsuario) {
        try {
            const response = await api.get(`Usuario/ListarPresencasCampanhas?idUsuario=${idUsuario}`);
            console.log("Campanhas:", response.data); // Log das campanhas recebidas
            setCampanhas(response.data);
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

    const currentDate = new Date();
    console.log("Data atual:", currentDate); // Log da data atual

    const filteredCampanhas = campanhas.filter(campanha => {
        const campanhaDate = new Date(campanha.data); // Certifique-se de que o formato da data está correto
        console.log(`Campanha: ${campanha.nome}, Data: ${campanha.data}, Campanha Date: ${campanhaDate}`); // Log das datas das campanhas

        if (filter === 'todas') {
            return campanha.nome.toLowerCase().includes(pesquisaCampanha.toLowerCase());
        } else if (filter === 'participadas') {
            return campanha.nome.toLowerCase().includes(pesquisaCampanha.toLowerCase()) && isBefore(campanhaDate, currentDate);
        } else if (filter === 'futuras') {
            return campanha.nome.toLowerCase().includes(pesquisaCampanha.toLowerCase()) && isAfter(campanhaDate, currentDate);
        }
    });

    console.log(`Filtered Campanhas (${filter}):`, filteredCampanhas); // Log das campanhas filtradas

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
                                    onPress={() => {
                                        setFilter('todas');
                                        console.log("Filtro: todas"); // Log do filtro
                                    }}
                                />
                                <BotaoConsulta
                                    textButton={'Participadas'}
                                    onPress={() => {
                                        setFilter('participadas');
                                        console.log("Filtro: participadas"); // Log do filtro
                                    }}
                                />
                                <BotaoConsulta
                                    textButton={'Futuras'}
                                    onPress={() => {
                                        setFilter('futuras');
                                        console.log("Filtro: futuras"); // Log do filtro
                                    }}
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
    );
};
