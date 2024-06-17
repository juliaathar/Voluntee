import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { ContainerMinhasCampanhas } from "../../components/Container/Style";
import { HeaderHome } from "../../components/Header/Header";
import { TituloH3 } from "../../components/Titulo/Style";
import api from "../../service/ApiService";
import { Menu } from "../../components/Menu/Menu";
import { CardMinhasCampanhasList } from "../../components/CardMinhasCampanhas/CardMinhasCampanhas";

export const TodasCampanhas = ({ navigation, route }) => {
    const [campanhas, setCampanhas] = useState([]);
    const [menu, setMenu] = useState(false);

    async function listarCampanhas() {
        try {
            const response = await api.get(`/Campanha`);
            console.log("Campanhas:", response.data);
            setCampanhas(response.data);
        } catch (error) {
            console.log(`Erro ao listar campanhas: ${error}`);
        }
    }

    useEffect(() => {
        listarCampanhas();
    }, []);

    return (
        <ScrollView>
            <ContainerMinhasCampanhas>
                <HeaderHome onPress={() => setMenu(true)} alter />

                <TituloH3 style={{ marginTop: 25 }}>
                    Todas Campanhas
                </TituloH3>

                <CardMinhasCampanhasList
                    dados={campanhas}
                    navigation={navigation}
                />

                <Menu
                    visible={menu}
                    onRequestClose={() => setMenu(false)}
                    onBack={() => setMenu(false)}
                />
            </ContainerMinhasCampanhas>
        </ScrollView>
    );
};
