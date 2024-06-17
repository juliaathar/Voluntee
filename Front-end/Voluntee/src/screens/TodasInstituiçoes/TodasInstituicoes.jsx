import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { ContainerMinhasCampanhas } from "../../components/Container/Style";
import { HeaderHome } from "../../components/Header/Header";
import { TituloH3 } from "../../components/Titulo/Style";
import api from "../../service/ApiService";
import { Menu } from "../../components/Menu/Menu";
import { CardTodasInstituicaoList } from "../../components/CardTodasInstituiçoes/CardTodasInstituicoes";

export const TodasInstituicao = ({ navigation, route }) => {
    const [instituicao, setInstituicao] = useState([]);
    const [menu, setMenu] = useState(false);

    async function listarInstituicao() {
        try {
            const response = await api.get(`/Instituicao`);
            setInstituicao(response.data);
        } catch (error) {
            console.log(`Erro ao listar campanhas: ${error}`);
        }
    }

    useEffect(() => {
        listarInstituicao();
    }, []);

    return (

        <ContainerMinhasCampanhas>
            <HeaderHome onPress={() => setMenu(true)} alter />

            <TituloH3 style={{ top: 25 }}>
                Todas Instituições
            </TituloH3>

            <CardTodasInstituicaoList
                dados={instituicao}
                navigation={navigation}
            />

            <Menu
                visible={menu}
                onRequestClose={() => setMenu(false)}
                onBack={() => setMenu(false)}
            />
        </ContainerMinhasCampanhas>
    );
};
