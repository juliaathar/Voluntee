import { View } from "react-native"
import { CardPopular, CardPopularContainer } from "../../components/CardPopular/CardPopular";
import { CardCampanha, CardCampanhaList } from "../../components/CardCampanha/CardCampanha";
import { CardInstituicao, CardInstituicaoList } from "../../components/CardInstituicao/CardInstituicao";
import LogoAzulSvg from "../../components/LogoAzulSvg/LogoAzulSvg";
import LogoBrancoSvg from "../../components/LogoBrancoSvg/LogoBrancoSvg";
import { Header } from "@react-navigation/stack";
import { HeaderHome } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { Menu } from "../../components/Menu/Menu";
import { BotaoConsulta } from "../../components/Botao/Botao";
import api from "../../service/ApiService";

export const Pedro = ({ navigation }) => {
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

    useEffect(()=>{
        ListarCampanhas()
    },[])

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <CardCampanhaList
                dados={campanhas}
            />
        </View>
    )
}