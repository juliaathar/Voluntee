import { View } from "react-native"
import { Titulo } from "../../components/Titulo/Style"
import { Paragrafo } from "../../components/Paragrafo/Style";
import { CardPopular } from "../../components/CardPopular/CardPopular";

export const Pedro = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between", backgroundColor: "#0066FF", flexDirection: "row" }}>
            <CardPopular/>
            <CardPopular/>
        </View>
    )
}