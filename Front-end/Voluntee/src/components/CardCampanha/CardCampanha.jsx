import moment from "moment";
import { Blur, CardBody, CardList, Data, DataLocal, DescricaoCard, ImgCard, Info, InfoContainer, List, ListName, Local, More, ShowMore, TituloCard } from "./Style"
import { FontAwesome6 } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import axios from 'axios';

async function getCityFromCoordinates(latitude, longitude) {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=`);
        if (response.data.status === "OK") {
            console.log(response);
            const addressComponents = response.data.results[0].address_components;
            let city = '';

            addressComponents.forEach(component => {
                if (component.types.includes('administrative_area_level_2')) {
                    city = component.long_name;
                }
            });

            

            return city || 'Unknown city';
        } else {
            throw new Error("Unable to fetch address.");
        }
    } catch (error) {
        console.error("Error fetching address: ", error);
        return "Unknown city";
    }
}



function QuebraPalavra(nome, max = 15) {
    if (nome.length > max) {
        return nome.slice(0, max) + "...";
    }
    return nome;
}

export const CardCampanhaList = ({ navigation, dados, onPressMore, scroll }) => {
    const [profileData, setProfileData] = useState('')


    return (
        <CardList
            tamanho={dados.length}
        >
            <ListName>Outras campanhas</ListName>
            <List
                scrollEnable={scroll}
                data={dados}
                keyExtractor={(item) => item.id}
                initialNumToRender={3}
                renderItem={({ item }) => item.pessoasPresentes < 5001 ?
                    <CardCampanha
                        titulo={item.nome}
                        descricao={item.descricao}
                        imagem={item.imagem}
                        datas={`${moment(item.dataInicio).format('DD/MM')} - ${moment(item.dataEncerramento).format('DD/MM')}`}
                        local={item.local}
                        latitude={item.latitude}
                        longitude={item.longitude}
                        onPress={() => navigation.navigate('Campanha', {
                            profileData: profileData,
                            idCampanha: item.id,
                            titulo: item.nome,
                            email: item.email,
                            descricao: item.descricao,
                            imagem: item.imagem,
                            datas: `${moment(item.dataInicio).format('DD/MM/YYYY')} - ${moment(item.dataEncerramento).format('DD/MM/YYYY')}`,
                            local: item.local,
                            dinheiro: item.dinheiro,
                            alimento: item.alimento,
                            roupas: item.roupas,
                            latitude: item.latitude,
                            longitude: item.longitude
                        })}

                    />
                    :
                    <></>
                }
            />
            <ShowMore onPress={onPressMore}>
                <More>Ver mais...</More>
            </ShowMore>


        </CardList>
    )
}

export const CardCampanha = ({
    titulo = "titulo do card",
    descricao = "descrição do card campanha",
    imagem = require('../../assets/images/apresentacao3.png'),
    datas = "inicio - fim",
    local = "informe o local",
    latitude, 
    longitude,
    onPress
}) => {
    const [address, setAddress] = useState(local);

    useEffect(() => {
        if (latitude && longitude) {
            getCityFromCoordinates(latitude, longitude)
                .then(address => setAddress(address))
                .catch(error => console.error(error));
        }
    }, [latitude, longitude]);

    return (
        <CardBody
            onPress={onPress}
        >

            <ImgCard
                source={{ uri: imagem }}
            >
                <Blur />
            </ImgCard>


            <InfoContainer>
                <Info>
                    <TituloCard>{QuebraPalavra(titulo, 23)}</TituloCard>
                    <DescricaoCard>{QuebraPalavra(descricao, 80)}</DescricaoCard>
                </Info>

                <DataLocal>
                    <Data>
                        <FontAwesome6 name="calendar-day" size={14} color="#0066FF" /> {datas}
                    </Data>
                    <Local>
                        <FontAwesome6 name="location-dot" size={14} color="#0066FF" /> {address}
                    </Local>
                </DataLocal>
            </InfoContainer>
        </CardBody>
    )
}