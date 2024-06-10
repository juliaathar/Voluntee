import { CardInstituicaoList } from "../../components/CardInstituicao/CardInstituicao";
import { CardCampanhaList } from "../../components/CardCampanha/CardCampanha";
import { CardPopularContainer } from "../../components/CardPopular/CardPopular";
import { Container } from "../../components/Container/Style";
import { BotaoConsulta } from "../../components/Botao/Botao";
import { HeaderHome } from "../../components/Header/Header";
import OndaHome from "../../components/OndaHome/OndaHome";
import { Input } from "../../components/Input/Input";
import { Menu } from "../../components/Menu/Menu";
import { useEffect, useState } from "react";
import api from "../../service/ApiService";
import { ScrollView } from "react-native";

export const Home = ({navigation}) => {

    const [menu, setMenu] = useState(false)
    const [campanhas, setCampanhas] = useState([])
    const [instituicoes, setInstituicoes] = useState([])
    const [campanhasPopulares, setCampanhasPopulares] = useState([])

    async function ListarCampanhasPopulares() {
        await api.get(`/Campanha/ListarCampanhaPopulares`)
        .then(async response => {
            console.log("Campanhas populares:");
            //console.log(response.data);
            await setCampanhasPopulares(response.data)
            console.log(campanhasPopulares);
        })
        .catch(error =>{
            console.log(`Erro ao listar campanhas populares: ${error}`);
        })
    }
    async function ListarCampanhas() {
        await api.get(`/Campanha`)
        .then(async response => {
            console.log("Campanhas:");
            await setCampanhas(response.data)
            //console.log(response.data);
            console.log(campanhas);
        })
        .catch(error =>{
            console.log(`Erro ao listar campanhas: ${error}`);
        })
    }
    async function ListarInstituicoes() {
        await api.get(`/Instituicao`)
        .then(async response => {
            console.log("Instituicoes:");
            await setInstituicoes(response.data)
            //console.log(response.data);
            console.log(instituicoes);
        })
        .catch(error =>{
            console.log(`Erro ao listar instituicao: ${error}`);
        })
    }

    useEffect(() => {
        ListarCampanhasPopulares()
        ListarCampanhas()
        ListarInstituicoes()
    },[])
    
    return (
        <>
            <ScrollView>
                <Container>
                    <OndaHome />

                    <HeaderHome
                        onPress={() => setMenu(true)}
                    />

                    <Input
                        placeholder={"Pesquise"}
                        icon="search"
                    />

                    <CardPopularContainer
                        dados={campanhasPopulares}
                    />

                    <CardCampanhaList
                        dados={campanhas}
                        scroll={false}
                        navigation={navigation}
                    />

                    <CardInstituicaoList
                        dados={instituicoes}
                        scroll={false}
                        navigation={navigation}
                    />

                </Container>
            </ScrollView>

            <Menu
                visible={menu}
                onRequestClose={() => setMenu(false)}
                onBack={() => setMenu(false)}
            />
            
            <BotaoConsulta />
        </>
    )
}