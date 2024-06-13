import { ButtonsContainer, CheckContainer, SelectContainer, SubTitulo } from "../../components/SelectBox/Style"
import { BotaoDoacao, CheckBox, } from "../../components/SelectBox/SelectBox"
import { Container } from "../../components/Container/Style"
import { HeaderHome } from "../../components/Header/Header"
import { TituloH2, } from "../../components/Titulo/Style"
import { FormInput } from "../../components/Input/Input"
import { Botao } from "../../components/Botao/Botao"
import { Menu } from "../../components/Menu/Menu"
import { ScrollView, View } from "react-native"
import api from "../../service/ApiService"
import { useEffect, useState } from "react"
import moment from "moment"

import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'
import axios from "axios"
import * as yup from "yup"
import { ParagrafoErro } from "../../components/Paragrafo/Style"
export const NovaCampanha = () => {
    const [menu, setMenu] = useState(false);
    const [imagemUri, setImagemUri] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [descricao, setDescricao] = useState("");
    const [cep, setCep] = useState("");
    const [dataInicio, setDataInicio] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [doacao, setDoacao] = useState(false);
    const [alimentos, setAlimentos] = useState(false);
    const [roupas, setRoupas] = useState(false);
    const [dinheiro, setDinheiro] = useState(false);
    const [errors, setErrors] = useState({});

    const schema = yup.object().shape({
        nome: yup.string().required('Campo obrigatório'),
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        descricao: yup.string().required('Campo obrigatório'),
        cep: yup.string().required('Campo obrigatório'),
        // dataInicio: yup.string().required('Campo obrigatório').matches(/^\d{4}\/\d{2}\/\d{2}$/, 'Data inválida (DD/MM/AAAA)'),
        // dataFinal: yup.string().required('Campo obrigatório').matches(/^\d{4}\/\d{2}\/\d{2}$/, 'Data inválida (DD/MM/AAAA)'),
    });

    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            await ImagePicker.requestMediaLibraryPermissionsAsync();
            requestPermission(status === 'granted')
            //console.log(getMediaLibrary);
        })
    }, [])

    async function SelectImageGallery() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1
        });
        setImagemUri(result.assets[0].uri)
    }

    async function getCoordinatesFromCEP() {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=`);

            if (response.data.status === 'OK') {
                const { lat, lng } = response.data.results[0].geometry.location;
                console.log(lat, lng);

                return { lat, lng };
            } else {
                throw new Error('Erro na busca das coordenadas');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async function CadastrarCampanha() {
        try {
            await schema.validate({ nome, email, descricao, cep, dataInicio, dataFinal }, { abortEarly: false });
            const endereco = await getCoordinatesFromCEP();
            const formData = new FormData();

            formData.append("UsuarioId", "DBC298C8-D237-4289-86E3-FEEBC32871AE");
            formData.append("Imagem", imagemUri);
            formData.append("Nome", nome);
            formData.append("Email", email);
            formData.append("Descricao", descricao);
            formData.append("AceitaDoacao", doacao);
            formData.append("Alimento", alimentos);
            formData.append("Dinheiro", dinheiro);
            formData.append("Roupas", roupas);
            formData.append("Longitude", parseFloat(endereco.lng).toFixed(4));
            formData.append("Latitude", parseFloat(endereco.lat).toFixed(4));
            formData.append("DataInicio", dataInicio);
            formData.append("DataEncerramento", dataFinal);
            formData.append("PessoasPresentes", 0);
            formData.append("ImagemArquivo", {
                uri: imagemUri,
                name: `image.${imagemUri.split(".").pop()}`,
                type: `image/${imagemUri.split(".").pop()}`
            });

            await api.post('/Campanha', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            }).then(async response => {
                console.log("Campanha Cadastrada:", response.status);
            }).catch(error => {
                console.log(`Erro ao cadastrar campanha: ${error}`);
            });
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                let validationErrors = {};
                error.inner.forEach(err => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            } else {
                console.log('Erro ao cadastrar:', error);
            }
        }
    }

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
                        fieldValue={nome}
                        onChangeText={(newValue) => setNome(newValue)}
                    />
                    {errors.nome && <ParagrafoErro style={{ color: '#fbfbfb' }}>{errors.nome}</ParagrafoErro>}
                    <FormInput
                        label="E-mail"
                        placeholder="Email do organizador"
                        fieldValue={email}
                        onChangeText={(newValue) => setEmail(newValue)}
                    />
                    {errors.email && <ParagrafoErro style={{ color: '#fbfbfb' }}>{errors.email}</ParagrafoErro>}

                    <FormInput
                        label="Descrição"
                        placeholder="Descricao da campanha"
                        fieldValue={descricao}
                        onChangeText={(newValue) => setDescricao(newValue)}
                    />

                    {errors.descricao && <ParagrafoErro style={{ color: '#fbfbfb' }}>{errors.descricao}</ParagrafoErro>}


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

                    <SubTitulo style={{ top: 15 }}>Capa da campanha:</SubTitulo>
                    <Botao
                        textoBotao="Selecionar imagem"
                        width={90}
                        onPress={() => SelectImageGallery()}
                    />

                    <SubTitulo style={{ top: 15 }}>Selecione o local onde acontecerá:  </SubTitulo>
                    <FormInput
                        label="CEP"
                        placeholder="Cep"
                        fieldValue={cep}
                        onChangeText={(newValue) => setCep(newValue)}
                    />
                    {errors.cep && <ParagrafoErro style={{ color: '#fbfbfb' }}>{errors.cep}</ParagrafoErro>}
                    


                    <SubTitulo style={{ top: 15 }}>Selecione a data que acontecerá:</SubTitulo>
                    <FormInput
                        label="Data de início"
                        // placeholder="00/00/0000"
                        fieldValue={dataInicio}
                        onChangeText={(newvalue) => setDataInicio(newvalue)}
                    />
                    {errors.dataInicio && <ParagrafoErro style={{ color: '#fbfbfb' }}>{errors.dataInicio}</ParagrafoErro>}

                    <FormInput
                        label="Data de encerramento"
                        // placeholder="00/00/0000"
                        fieldValue={dataFinal}
                        onChangeText={(newvalue) => setDataFinal(newvalue)}
                    />
                    {errors.dataFinal && <ParagrafoErro style={{ color: '#fbfbfb' }}>{errors.dataFinal}</ParagrafoErro>}


                    <Botao
                        textoBotao="Cadastrar"
                        width={90}
                        onPress={() => CadastrarCampanha()}
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