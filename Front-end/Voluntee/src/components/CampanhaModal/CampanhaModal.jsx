import React from 'react';
import { Modal } from "react-native";
import { ModalContent, PatientModal, RecordImage } from "./Style";
import { Paragrafo } from "../Paragrafo/Style";
import { ConteinerButton } from "../Container/Style";
import { Botao } from "../Botao/Botao";

const CampanhaModal = ({ navigation, visible, setShowAppointment, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <RecordImage source={require('../../assets/images/LogoAzul.png')} />
                    <Paragrafo style={{ fontSize: 18, color: "#00000" }}>
                        Deseja confirmar sua presença na campanha?
                    </Paragrafo>
                    <ConteinerButton>
                        <Botao
                            alter
                            textoBotao='Confirmar'
                            onPress={() => setShowAppointment(false)}
                        />
                    </ConteinerButton>
                </ModalContent>
            </PatientModal>
        </Modal>
    );
};

export default CampanhaModal;
