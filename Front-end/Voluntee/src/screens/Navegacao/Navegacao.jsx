import { Button, View } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Cadastro"
                onPress={() => navigation.navigate("Cadastro")}
            />
            <Button
                title="Apresentacao"
                onPress={() => navigation.navigate("Apresentacao")}
            />
            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title="Testes - Eduardo"
                onPress={() => navigation.navigate("Eduardo")}
            />
            <Button
                title="Testes - Pedro"
                onPress={() => navigation.navigate("Pedro")}
            />

            <Button
                title="Testes - Joao"
                onPress={() => navigation.navigate("Joao")}
            />

            <Button
                title="RecuperarSenha"
                onPress={() => navigation.navigate("RecuperarSenha")}
            />
            <Button
                title="VerificarEmail"
                onPress={() => navigation.navigate("VerificarEmail")}
            />

            <Button
                title="RedefinirSenha"
                onPress={() => navigation.navigate("RedefinirSenha")}
            />
            <Button
                title="Perfil"
                onPress={() => navigation.navigate("Perfil")}
            />
            <Button
                title="Campanha"
                onPress={() => navigation.navigate("Campanha")}
            />
            <Button
                title="NovaCampanha"
                onPress={() => navigation.navigate("NovaCampanha")}
            />
        </View>
    )
}