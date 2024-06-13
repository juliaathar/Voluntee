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

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const token = await userDecodeToken();
                setIdUsuario(token.id);
            } catch (error) {
                console.error("Erro ao obter o ID do usuário:", error);
            }
        };

        fetchUserId();
    }, []);

    const confirmarPresenca = async () => {
        try {
            const response = await api.post(`/PresencaCampanha?idUsuario=${idUsuario}&idCampanha=${idCampanha}`);

            if (response.status == 201) {
                setShowAppointment(false);
            } else {
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
                    <Paragrafo style={{ fontSize: 18, color: "#00000" }}>
                        Deseja confirmar sua presença na campanha?
                    </Paragrafo>
                    <ConteinerButton>
                        <Botao
                            alter
                            textoBotao='Confirmar'
                            onPress={confirmarPresenca}
                        />
                    </ConteinerButton>
                </ModalContent>
            </PatientModal>
        </Modal>
    );
};

export default CampanhaModal;
