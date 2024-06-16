import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ConteinerButton, ConteinerCadastro, ConteinerGeral, ConteinerLink } from '../../components/Container/Style';
import { Input } from '../../components/Input/Input';
import { ConteinerBolaMenor, ConteinerBolaMaior, ConteinerIcon } from './Style';
import { TituloH2 } from '../../components/Titulo/Style';
import { Botao } from '../../components/Botao/Botao';
import { Link, TextLink } from '../../components/Link/Link';
import { ParagrafoErro } from '../../components/Paragrafo/Style';
import api from '../../service/ApiService';
import * as yup from 'yup';
import { format, differenceInYears, isValid } from 'date-fns';

export const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState(null);
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirm, setConfirm] = useState('');
  const [btnLoad, setBtnLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [disableNavigation, setDisableNavigation] = useState(false);

  const schema = yup.object().shape({
    nome: yup.string().required('Campo obrigatório').test('nome-sobrenome', 'Deve conter nome e sobrenome', value => {
      const parts = value.split(' ');
      return parts.length >= 2;
    }),
    email: yup.string().email('Email inválido').matches(/@gmail\.com$/, 'Email deve ser @gmail.com').required('Campo obrigatório'),
    cpf: yup.string().matches(/^\d{14}$/, 'CPF deve conter 11 dígitos').required('Campo obrigatório'),
    data: yup.date().nullable().required('Campo obrigatório').test('idade', 'Você deve ter pelo menos 18 anos', value => {
      if (!value) return false; 
      return differenceInYears(new Date(), new Date(value)) >= 18;
    }),
    senha: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial').required('Campo obrigatório'),
    confirm: yup.string().oneOf([yup.ref('senha'), null], 'Senhas não conferem').required('Campo obrigatório')
  });

  useEffect(() => {
    if (btnLoad) {
      setDisableNavigation(true);
    } else {
      setDisableNavigation(false);
    }
  }, [btnLoad]);

  async function cadastrar() {
    setBtnLoad(true);
    try {
      if (!isValid(new Date(data))) {
        setErrors(prevErrors => ({
          ...prevErrors,
          data: 'Campo obrigatório'
        }));
        return;
      }

      await schema.validate({ nome, email, cpf, data, senha, confirm }, { abortEarly: false });

      const formattedData = format(new Date(data), 'yyyy-MM-dd');

      const jsonData = {
        nome: nome,
        dataNascimento: formattedData,
        cpf: cpf,
        senha: senha,
        email: email,
        codRecupSenha: 0,
        pontos: 0,
        perfilEditado: true,
        fotoAtualizada: true,
      };

      const response = await api.post("/Usuario", JSON.stringify(jsonData), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        console.log("Cadastro realizado com sucesso");
        navigation.navigate('Login');
      }
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

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setShowDatePicker(Platform.OS === 'ios');
    setData(currentDate);
  };


  const formatarCPF = (inputCPF) => {
    const cpfLimpo = inputCPF.replace(/\D/g, '');

    let cpfFormatado = '';
    cpfLimpo.split('').forEach((char, index) => {
      if (index === 3 || index === 6) {
        cpfFormatado += '.';
      } else if (index === 9) {
        cpfFormatado += '-';
      }
      cpfFormatado += char;
    });

    return cpfFormatado;
  };

  const handleCPFChange = (newText) => {
    if (newText.length <= 14) {
      setCpf(newText);
    }
  };

  return (
    <View style={styles.container}>
      <ConteinerBolaMenor>
        <ConteinerIcon onPress={() => !btnLoad && navigation.navigate('Login')}>
          <AntDesign name="left" size={26} color="#0066FF" />
        </ConteinerIcon>
      </ConteinerBolaMenor>
      <ConteinerBolaMaior>
        <TituloH2>Cadastre-se</TituloH2>
        <ConteinerGeral>
          <ConteinerCadastro>
            <Input
              alter
              icon='user'
              placeholder='Nome'
              fieldValue={nome}
              onChangeText={(v) => setNome(v)}
              style={{ borderColor: errors.nome ? '#C81D25' : '#0066FF', borderWidth: errors.nome ? 2 : 2 }}
            />
            {errors.nome && <ParagrafoErro style={{ color: '#C81D25' }}>{errors.nome}</ParagrafoErro>}
            <Input
              alter
              icon='envelopeAzul'
              placeholder='Email'
              fieldValue={email}
              onChangeText={(v) => setEmail(v)}
              style={{ borderColor: errors.email ? '#C81D25' : '#0066FF', borderWidth: errors.email ? 2 : 2 }}
            />
            {errors.email && <ParagrafoErro style={{ color: '#C81D25' }}>{errors.email}</ParagrafoErro>}
            <Input
              alter
              icon='idCard'
              placeholder='CPF'
              fieldValue={formatarCPF(cpf)}
              onChangeText={handleCPFChange}
              maxLength={14} 
              keyboardType="numeric"
              style={{ borderColor: errors.cpf ? '#C81D25' : '#0066FF', borderWidth: errors.cpf ? 2 : 2 }}
            />
            {errors.cpf && <ParagrafoErro style={{ color: '#C81D25' }}>{errors.cpf}</ParagrafoErro>}
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Input
                alter
                icon='calendar'
                placeholder='Data de nascimento'
                fieldValue={data ? format(new Date(data), 'dd/MM/yyyy') : ''}
                editable={false}
                pointerEvents="none"
                style={{ borderColor: errors.data ? '#C81D25' : '#0066FF', borderWidth: errors.data ? 2 : 2 }}
              />
            </TouchableOpacity>
            {errors.data && <ParagrafoErro style={{ color: '#C81D25' }}>{errors.data}</ParagrafoErro>}
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={data ? new Date(data) : new Date()}
                mode="date"
                display="default"
                onChange={onChangeDate}
                maximumDate={new Date()}
              />
            )}
            <Input
              alter
              icon='olhoAzul'
              placeholder='Senha'
              fieldValue={senha}
              secure={true}
              onChangeText={(v) => setSenha(v)}
              style={{ borderColor: errors.senha ? '#C81D25' : '#0066FF', borderWidth: errors.senha ? 2 : 2 }}
            />
            {errors.senha && <ParagrafoErro style={{ color: '#C81D25' }}>{errors.senha}</ParagrafoErro>}
            <Input
              alter
              icon='olhoAzul'
              secure={true}
              placeholder='Confirmar Senha'
              fieldValue={confirm}
              onChangeText={(v) => setConfirm(v)}
              style={{ borderColor: errors.confirm ? '#C81D25' : '#0066FF', borderWidth: errors.confirm ? 2 : 2 }}
            />
            {errors.confirm && <ParagrafoErro style={{ color: '#C81D25' }}>{errors.confirm}</ParagrafoErro>}
            <ConteinerButton>
              <Botao
                alter
                loading={btnLoad}
                white={true}
                textoBotao='Cadastrar'
                onPress={cadastrar}
              />
            </ConteinerButton>
            <ConteinerLink onPress={() => !btnLoad && navigation.navigate('Login')}>
              <TextLink>Já tem uma conta?</TextLink>
              <Link onPress={() => !btnLoad && navigation.navigate('Login')}>Voltar</Link>
            </ConteinerLink>
          </ConteinerCadastro>
        </ConteinerGeral>
      </ConteinerBolaMaior>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cadastro;
