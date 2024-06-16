import { ButtonsContainer, CheckContainer, SelectContainer, SubTitulo } from "../../components/SelectBox/Style"
import { BotaoDoacao, CheckBox, } from "../../components/SelectBox/SelectBox"
import { Container } from "../../components/Container/Style"
import DateTimePicker from '@react-native-community/datetimepicker';
import { HeaderHome } from "../../components/Header/Header"
import { TituloH2, } from "../../components/Titulo/Style"
import { FormInput } from "../../components/Input/Input"
import { Botao } from "../../components/Botao/Botao"
import { Menu } from "../../components/Menu/Menu"
import { ScrollView, TouchableOpacity, View } from "react-native"
import api from "../../service/ApiService"
import { useEffect, useState } from "react"
import moment from "moment"

import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'
import axios from "axios"
import * as yup from "yup"
import { ParagrafoErro } from "../../components/Paragrafo/Style"
import { userDecodeToken } from "../../utils/Auth"


export const NovaCampanha = ({ navigation }) => {
    const [menu, setMenu] = useState(false);
    const [imagemUri, setImagemUri] = useState('');
    const [usuarioId, setUsuarioId] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [descricao, setDescricao] = useState('');
    const [cep, setCep] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [doacao, setDoacao] = useState(false);
    const [alimentos, setAlimentos] = useState(false);
    const [roupas, setRoupas] = useState(false);
    const [dinheiro, setDinheiro] = useState(false);
    const [errors, setErrors] = useState({});
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDateType, setSelectedDateType] = useState('');
    const [btnLoad, setBtnLoad] = useState(false);

    const schema = yup.object().shape({
        nome: yup.string().required('Campo obrigatório'),
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        descricao: yup.string().required('Campo obrigatório'),
        cep: yup.string().required('Campo obrigatório'),
        dataInicio: yup.date().required('Campo obrigatório').min(new Date(), 'A data de início deve ser maior ou igual a hoje'),
        dataFinal: yup.date()
            .required('Campo obrigatório')
            .min(yup.ref('dataInicio'), 'A data de encerramento deve ser maior ou igual à data de início')
            .min(new Date(), 'A data de encerramento deve ser maior ou igual a hoje')
    });
    

    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            await ImagePicker.requestMediaLibraryPermissionsAsync();
            requestPermission(status === 'granted');
        })();
        getUserId();
    }, []);

    async function SelectImageGallery() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1
        });
        setImagemUri(result.assets[0].uri);
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
        setBtnLoad(true);
        try {
            await schema.validate({ nome, email, descricao, cep, dataInicio, dataFinal }, { abortEarly: false });
            const endereco = await getCoordinatesFromCEP();
            const formattedDataInicio = moment(dataInicio).format('YYYY-MM-DD');
            const formattedDataFinal = moment(dataFinal).format('YYYY-MM-DD');
            const formData = new FormData();

            formData.append('UsuarioId', usuarioId);
            formData.append('Imagem', imagemUri);
            formData.append('Nome', nome);
            formData.append('Email', email);
            formData.append('Descricao', descricao);
            formData.append('AceitaDoacao', doacao);
            formData.append('Alimento', alimentos);
            formData.append('Dinheiro', dinheiro);
            formData.append('Roupas', roupas);
            formData.append('Longitude', parseFloat(endereco.lng).toFixed(4));
            formData.append('Latitude', parseFloat(endereco.lat).toFixed(4));
            formData.append('DataInicio', formattedDataInicio);
            formData.append('DataEncerramento', formattedDataFinal);
            formData.append('PessoasPresentes', 0);
            formData.append('ImagemArquivo', {
                uri: imagemUri,
                name: `image.${imagemUri.split('.').pop()}`,
                type: `image/${imagemUri.split('.').pop()}`
            });

            await api.post('/Campanha', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }).then(async response => {
                console.log('Campanha Cadastrada:', response.status);
                navigation.navigate('Home');
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
        setBtnLoad(false);
    }

    async function getUserId() {
        try {
            const token = await userDecodeToken();
            setUsuarioId(token.id);
            console.log(token.id);
        } catch (error) {
            console.log(`Erro no token: ${error}`);
        }
    }


  
    const openStartDatePicker = () => {
        setSelectedDateType('inicio');
        setShowDatePicker(true);
    };

    const openEndDatePicker = () => {
        setSelectedDateType('final');
        setShowDatePicker(true);
    };


    const onChangeDateInicio = (event, selectedDate) => {
        const currentDate = selectedDate || dataInicio;
        setShowDatePicker(false); 
        setDataInicio(currentDate);
    };

    const onChangeDateFinal = (event, selectedDate) => {
        const currentDate = selectedDate || dataFinal;
        setShowDatePicker(false);
        setDataFinal(currentDate);
    };



    return (
        <>
            <ScrollView>
                <Container style={{ backgroundColor: '#0066FF' }}>
                    <HeaderHome onPress={() => setMenu(true)} alter />
                    <View style={{ width: '60%', marginBottom: 15 }}>
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
                        placeholder="Descrição da campanha"
                        fieldValue={descricao}
                        onChangeText={(newValue) => setDescricao(newValue)}
                    />
                    {errors.descricao && <ParagrafoErro style={{ color: '#fbfbfb' }}>{errors.descricao}</ParagrafoErro>}

                    <SelectContainer>
                        <SubTitulo>Aceita doação?</SubTitulo>
                        <ButtonsContainer>
                            <BotaoDoacao textButton="Sim" actived={doacao} onPress={() => setDoacao(true)} />
                            <BotaoDoacao textButton="Não" actived={!doacao} onPress={() => setDoacao(false)} />
                        </ButtonsContainer>

                        {doacao && (
                            <>
                                <SubTitulo>Selecione as doações necessárias:</SubTitulo>

                                <CheckContainer>
                                    <CheckBox textButton={'Alimentos'} actived={alimentos} onPress={() => setAlimentos(!alimentos)} />
                                    <CheckBox textButton={'Roupas'} actived={roupas} onPress={() => setRoupas(!roupas)} />
                                    <CheckBox textButton={'Dinheiro'} actived={dinheiro} onPress={() => setDinheiro(!dinheiro)} />
                                </CheckContainer>
                            </>
                        )}
                    </SelectContainer>

                    <View style={{ alignSelf: 'flex-start', marginLeft: 25 }}>
                        <SubTitulo style={{ top: 15 }}>Capa da campanha:</SubTitulo>
                    </View>
                    <Botao textoBotao="Selecionar imagem" width={90} disabled={btnLoad} onPress={() => SelectImageGallery()} />

                    <View style={{ alignSelf: 'flex-start', marginLeft: 25 }}>
                        <SubTitulo style={{ top: 15 }}>Selecione o local onde acontecerá:</SubTitulo>
                    </View>
                    <FormInput label="CEP" placeholder="Cep" fieldValue={cep} onChangeText={(newValue) => setCep(newValue)} />
                    {errors.cep && <ParagrafoErro style={{ color: '#fbfbfb' }}>{errors.cep}</ParagrafoErro>}

                    <View style={{ alignSelf: 'flex-start', marginLeft: 25 }}>
                        <SubTitulo style={{ top: 15 }}>Selecione a data que acontecerá:</SubTitulo>
                    </View>


                    <TouchableOpacity onPress={() => openStartDatePicker()}>
                        <FormInput
                            label="Data de início"
                            editable={false}
                            pointerEvents="none"
                            style={{ borderColor: errors.dataInicio ? '#C81D25' : '#0066FF', borderWidth: errors.dataInicio ? 2 : 2 }}
                            fieldValue={dataInicio ? moment(dataInicio).format('DD/MM/YYYY') : ''}
                        />
                    </TouchableOpacity>
                    {showDatePicker && selectedDateType === 'inicio' && (
                        <DateTimePicker
                            testID="dateTimePickerInicio"
                            value={dataInicio ? new Date(dataInicio) : new Date()}
                            mode="date"
                            display="default"
                            onChange={onChangeDateInicio}
                            minimumDate={new Date()}
                        />
                    )}
                    {errors.dataInicio && <ParagrafoErro style={{ color: '#fbfbfb' }}>{errors.dataInicio}</ParagrafoErro>}



                    <TouchableOpacity onPress={() => openEndDatePicker()}>
                        <FormInput
                            label="Data de encerramento"
                            editable={false}
                            pointerEvents="none"
                            style={{ borderColor: errors.dataFinal ? '#C81D25' : '#0066FF', borderWidth: errors.dataFinal ? 2 : 2 }}
                            fieldValue={dataFinal ? moment(dataFinal).format('DD/MM/YYYY') : ''}
                        />
                    </TouchableOpacity>
                    {errors.dataFinal && <ParagrafoErro style={{ color: '#fbfbfb' }}>{errors.dataFinal}</ParagrafoErro>}

                    {showDatePicker && selectedDateType === 'final' && (
                        <DateTimePicker
                            testID="dateTimePickerFinal"
                            value={dataFinal ? new Date(dataFinal) : new Date()}
                            mode="date"
                            display="default"
                            onChange={onChangeDateFinal}
                            minimumDate={dataInicio ? new Date(dataInicio) : new Date()}
                        />
                    )}

                    <Botao textoBotao="Cadastrar" width={90} loading={btnLoad} onPress={() => CadastrarCampanha()} />
                </Container>
            </ScrollView>

            <Menu visible={menu} onRequestClose={() => setMenu(false)} onBack={() => setMenu(false)} />
        </>
    );
};