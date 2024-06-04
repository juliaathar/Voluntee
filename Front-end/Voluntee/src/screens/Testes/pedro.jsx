import { View } from "react-native"
import { CardPopular, CardPopularContainer } from "../../components/CardPopular/CardPopular";
import { CardCampanha, CardCampanhaList } from "../../components/CardCampanha/CardCampanha";
import { CardInstituicao } from "../../components/CardInstituicao/CardInstituicao";

export const Pedro = ({ navigation }) => {
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
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
            <CardInstituicao/>
        </View>
    )
}