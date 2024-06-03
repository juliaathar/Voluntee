import { CardPopularContainer } from "../../components/CardPopular/CardPopular";
import { Container } from "../../components/Container/Style";
import { HeaderHome } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import OndaHome from "../../components/OndaHome/OndaHome";

export const Home = () => {
    const dados = [
        {
            id: 1,
            titulo: "Teste.1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/ImgTesteCard.png'),
        },
        {
            id: 2,
            titulo: "Teste.2",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/ImgTesteCard.png'),
        },
        {
            id: 3,
            titulo: "Teste.3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/ImgTesteCard.png'),
        },
        {
            id: 4,
            titulo: "Teste.4",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/ImgTesteCard.png'),
        },
        {
            id: 5,
            titulo: "Teste.5",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/ImgTesteCard.png'),
        },
    ]
    return (
        <Container>
            <OndaHome />

            <HeaderHome />

            <Input
                placeholder={"Pesquise"}
                icon="search"
            />

            <CardPopularContainer
                dados={dados}
            />
        </Container>
    )
}