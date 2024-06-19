import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Modal } from "react-native";
import { ButtonClose, ModalContent, PatientModal, RecordImage } from "./Style";
import { Paragrafo } from "../Paragrafo/Style";
import { ConteinerButton } from "../Container/Style";
import { Botao } from "../Botao/Botao";
import api from '../../service/ApiService';
import { userDecodeToken } from '../../utils/Auth';

const CampanhaModal = ({ visible, idCampanha, setShowAppointment, onCloseModal, ...rest }) => {
    const [idUsuario, setIdUsuario] = useState('');
    const [campanhasUsuario, setCampanhasUsuario] = useState([]);
    const [isPresente, setIsPresente] = useState(false);

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const token = await userDecodeToken();
                setIdUsuario(token.id);
            } catch (error) {
                console.error("Erro ao obter o ID do usuário:", error);
            }
        };

        const fetchCampanhasUsuario = async () => {
            try {
                const response = await api.get(`/Usuario/ListarPresencasCampanhas?idUsuario=${idUsuario}`);
                setCampanhasUsuario(response.data);
            } catch (error) {
                console.error("Erro ao obter campanhas do usuário:", error);
            }
        };

        if (idUsuario) {
            fetchCampanhasUsuario();
        }

        fetchUserId();
    }, [idUsuario]);

    useEffect(() => {
        const campanhaEncontrada = campanhasUsuario.some(campanha => campanha.id === idCampanha);
        setIsPresente(campanhaEncontrada);
    }, [campanhasUsuario, idCampanha]);

    const confirmarPresenca = async () => {
        try {
            const response = await api.post(`/PresencaCampanha?idUsuario=${idUsuario}&idCampanha=${idCampanha}`);

            if (response.status === 201) {
                setIsPresente(true);
                setShowAppointment(false);
            }
        } catch (error) {
            console.error("Erro ao confirmar presença:", error);
        }
    };

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    {/* Botão de fechar modal */}
                    <ButtonClose onPress={onCloseModal}>
                        <Ionicons name="close-outline" size={40} color="#0066FF" />
                    </ButtonClose>
                    <RecordImage source={require('../../assets/images/LogoAzul.png')} />
                    <Paragrafo style={{ fontSize: 18, color: "#000000" }}>
                        {isPresente ? "Você já confirmou presença nesta campanha." : "Deseja confirmar sua presença na campanha?"}
                    </Paragrafo>
                    <ConteinerButton>
                        {!isPresente && (
                            <Botao
                                alter
                                textoBotao='Confirmar'
                                onPress={confirmarPresenca}
                            />
                        )}
                    </ConteinerButton>
                </ModalContent>
            </PatientModal>
        </Modal>
    );
};

export default CampanhaModal;
