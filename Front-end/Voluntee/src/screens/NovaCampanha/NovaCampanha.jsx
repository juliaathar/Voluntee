import { Container } from "../../components/Container/Style"
import { HeaderHome } from "../../components/Header/Header"
import { Menu } from "../../components/Menu/Menu"
import { ScrollView, View } from "react-native"
import { useState } from "react"
import { FormInput } from "../../components/Input/Input"
import { TituloH2 } from "../../components/Titulo/Style"

export const NovaCampanha = () => {

    const [menu, setMenu] = useState(false)

    return (
        <>
            <ScrollView>
                <Container style={{ backgroundColor: "#0066FF" }}>
                    <HeaderHome
                        onPress={() => setMenu(true)}
                        alter
                    />
                    <View>
                        <TituloH2>Cadastre uma campanha</TituloH2>
                    </View>
                    <FormInput
                        label="Nome"
                    />
                    <FormInput
                        label="E-mail"
                    />
                    <FormInput
                        label="Descrição"
                    />
                    <FormInput
                        label="CEP"
                    />
                    <FormInput
                        label="Data de início (Opcional)"
                    />
                    <FormInput
                        label="Data de encerramento (Opcional) "
                    />
                </Container>
            </ScrollView>

            <Menu
                visible={menu}
                onRequestClose={() => setMenu(false)}
                onBack={() => setMenu(false)}
            />
        </>
    )
}