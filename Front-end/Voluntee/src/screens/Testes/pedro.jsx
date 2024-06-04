import { View } from "react-native"
import { CardPopular, CardPopularContainer } from "../../components/CardPopular/CardPopular";
import { CardCampanha } from "../../components/CardCampanha/CardCampanha";

export const Pedro = ({ navigation }) => {
    const dados = [
        {
            id: 1,
            titulo: "Teste.1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/apresentacao3.png'),
        },
        {
            id: 2,
            titulo: "Teste.2",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/apresentacao3.png'),
        },
        {
            id: 3,
            titulo: "Teste.3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/apresentacao3.png'),
        },
        {
            id: 4,
            titulo: "Teste.4",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/apresentacao3.png'),
        },
        {
            id: 5,
            titulo: "Teste.5",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis harum voluptate autem qui dolorum nemo rerum dolores cum voluptas expedita laboriosam ipsam obcaecati natus ullam, nisi a fuga aperiam.",
            imagem: require('../../assets/images/apresentacao3.png'),
        },
    ]
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
            <CardCampanha/>
        </View>
    )
}