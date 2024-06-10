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

export const Home = () => {
    const dados = [
        {
            id: 1,
            titulo: "Teste.1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/ImgTesteCard.png'),
            datas: "07:45 - 11:00",
            local: "Sao paulo"
        },
        {
            id: 2,
            titulo: "Teste.2",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/ImgTesteCard.png'),
            datas: "14:00 - 17:45",
            local: "Sergipe"
        },
        {
            id: 3,
            titulo: "Teste.3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/ImgTesteCard.png'),
            datas: "06:00 - 10:50",
            local: "Praia grande"
        },
        {
            id: 4,
            titulo: "Teste.4",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/ImgTesteCard.png'),
            datas: "17:00 - 19:00",
            local: "Belo Horizonte"
        },
        {
            id: 5,
            titulo: "Teste.5",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/ImgTesteCard.png'),
            datas: "19:00 - 21:00",
            local: "Pedrinhas"
        },
    ]

    const [menu, setMenu] = useState(false)
    const [campanhas, setCampanhas] = useState([])
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
        .then(response => {
            console.log("Instituicoes:");
            console.log(response.data);
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
                    />

                    <CardInstituicaoList
                        dados={dados}
                        scroll={false}
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