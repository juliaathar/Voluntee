import { ButtonsContainer, CheckContainer, SelectContainer, SubTitulo } from "../../components/SelectBox/Style"
import { BotaoDoacao, CheckBox, } from "../../components/SelectBox/SelectBox"
import { Container } from "../../components/Container/Style"
import { HeaderHome } from "../../components/Header/Header"
import { TituloH2, } from "../../components/Titulo/Style"
import { FormInput } from "../../components/Input/Input"
import { Botao } from "../../components/Botao/Botao"
import { Menu } from "../../components/Menu/Menu"
import { ScrollView, View } from "react-native"
import { useState } from "react"
import api from "../../service/ApiService"

export const NovaCampanha = () => {

    const [menu, setMenu] = useState(false)


    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [descricao, setDescricao] = useState("")
    const [cep, setCep] = useState("")
    const [dataInicio, setDataInicio] = useState("00/00/0000")
    const [dataFinal, setDataFinal] = useState("00/00/0000")

    const [doacao, setDoacao] = useState(false)
    const [alimentos, setAlimentos] = useState(false)
    const [roupas, setRoupas] = useState(false)
    const [dinheiro, setDinheiro] = useState(false)

    async function CadastrarCampanha() {
        await api.post('/Campanha', {
            UsuarioId: "",
            Imagem:"",
            Nome:nome,
            Email:email,
            Descricao:descricao,
            AceitaDoacao:doacao,
            Alimento:alimentos,
            Dinheiro:dinheiro,
            Roupas:roupas,
            Longitude:"",
            Latitude:"",
            DataInicio:dataInicio,
            DataEncerramento:dataFinal,
            PessoasPresentes:0,
        })
    }

    // UsuarioId
    // Imagem
    // Nome
    // Email
    // Descricao
    // AceitaDoacao
    // Alimento
    // Dinheiro
    // Roupas
    // Longitude
    // Latitude
    // DataInicio
    // DataEncerramento
    // PessoasPresentes

    return (
        <>
            <ScrollView>
                <Container style={{ backgroundColor: "#0066FF" }}>
                    <HeaderHome
                        onPress={() => setMenu(true)}
                        alter
                    />
                    <View style={{ width: "60%", marginBottom: 15 }}>
                        <TituloH2 alter>Cadastre uma campanha</TituloH2>
                    </View>

                    <FormInput
                        label="Nome"
                        placeholder="Nome da campanha"
                    />
                    <FormInput
                        label="E-mail"
                        placeholder="Email do organizador"
                    />
                    <FormInput
                        label="Descrição"
                        placeholder="Descricao da campanha"
                    />

                    <SelectContainer>
                        <SubTitulo>Aceita doação?</SubTitulo>
                        <ButtonsContainer>

                            <BotaoDoacao
                                textButton="Sim"
                                actived={doacao}
                                onPress={() => setDoacao(true)}
                            />

                            <BotaoDoacao
                                textButton="Não"
                                actived={doacao == false}
                                onPress={() => setDoacao(false)}
                            />

                        </ButtonsContainer>

                        {doacao ? (
                            <>
                                <SubTitulo>Selecione as doações necessárias:</SubTitulo>

                                <CheckContainer>
                                    <CheckBox
                                        textButton={"Alimentos"}
                                        actived={alimentos}
                                        onPress={() => alimentos ? setAlimentos(false) : setAlimentos(true)}
                                    />

                                    <CheckBox
                                        textButton={"Roupas"}
                                        actived={roupas}
                                        onPress={() => roupas ? setRoupas(false) : setRoupas(true)}
                                    />

                                    <CheckBox
                                        textButton={"Dinheiro"}
                                        actived={dinheiro}
                                        onPress={() => dinheiro ? setDinheiro(false) : setDinheiro(true)}
                                    />
                                </CheckContainer>
                            </>
                        ) : <></>}


                    </SelectContainer>

                    <SubTitulo style={{ top: 15 }}>Selecione o local onde acontecerá:  </SubTitulo>
                    <FormInput
                        label="CEP"
                        placeholder="Cep"
                    />

                    <SubTitulo style={{ top: 15 }}>Selecione o local onde acontecerá:  </SubTitulo>
                    <FormInput
                        label="Data de início (Opcional)"
                        placeholder="00/00/0000"
                    />
                    <FormInput
                        label="Data de encerramento (Opcional) "
                        placeholder="00/00/0000"
                    />

                    <Botao
                        textoBotao="Cadastrar"
                        width={90}
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