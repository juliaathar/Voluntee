import { useEffect, useRef, useState } from "react";
import api from "../../service/ApiService";
import { Container } from "../../components/Container/Style";
import { ContentVerify, InputVerify } from "../VerificarEmail/Style";
import { StyleSheet } from "react-native";



export const Joao = ({ navigation }) => {

    const [codigo, setCodigo] = useState('')
    const [loading, setLoading] = useState(false);

    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)]

    function focusNextInput(index) {
        // se o index e menor que a quantidade de campos 
        if (index < inputs.length - 1) {
            inputs[index + 1].current.focus()
        }
    }

    function focusPrevInput(index) {
        if (index > 0) {
            inputs[index - 1].current.focus()
        }
    }

    async function ValidarCodigo() {
        console.log(codigo);

        await api.post(`/RecuperarSenha/ValidarCodigoRecuperacaoSenha?email=${route.params.emailRecuperacao}&codigo=${codigo}`)
            .then(() => {
                navigation.replace("RedefinirSenha", { emailRecuperacao: route.params.emailRecuperacao });
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        inputs[0].current.focus()
    }, [])
    return (
        <Container style={styles.container}>
            <ContentVerify>
                {
                    [0, 1, 2, 3].map((index) => (
                        <InputVerify
                            key={index} //Chave de acordo com o index do map
                            ref={inputs[index]} // Referencia de acordo
                            maxLength={1}
                            placeholder="0"
                            keyboardType="numeric"
                            caretHidden={true}

                            onChangeText={(text) => {
                                //verificar se o texto nao e vazio(para voltar para o campo anterior)
                                if (text == "") {
                                    focusPrevInput(index)

                                } else {

                                    const novoCodigo = [...codigo] //separa os valores 
                                    novoCodigo[index] = text
                                    setCodigo(novoCodigo.join(''))

                                    // setCodigo(`${codigo}${text}`)

                                    //verificar se o campo tem 1 caracter
                                    focusNextInput(index)
                                }


                            }}
                        />
                    ))
                }
            </ContentVerify>
        </Container>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0066FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});