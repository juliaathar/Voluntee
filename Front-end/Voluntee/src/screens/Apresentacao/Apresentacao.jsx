import { ConteinerGeral, ConteinerText } from '../../components/Container/Style';
import { ImagemApresentacao, LogoBranca } from '../../components/Imagem/Imagem';
import { Paragrafo } from '../../components/Paragrafo/Style';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TituloH3 } from '../../components/Titulo/Style';
import { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { ConteinerSlide, ImagemSlide, SlideBody, SlideText } from './Style';


export const Apresentacao = ({navigation}) => {

  const [showHome, setShowHome] = useState(false)

  const slidesDados = [
    {
      key: "1",
      titulo: "Descubra campanhas solidárias perto de você.",
      paragrafo: "Explore diversas oportunidades para se envolver em ações que impactam positivamente a sua comunidade.",
      imagem: require('../../assets/images/apresentacao1.png')
    },
    {
      key: "2",
      titulo: "Envolva-se em projetos significativos.",
      paragrafo: "Participe de iniciativas que realmente fazem a diferença e contribua para a transformação de vidas.",
      imagem: require('../../assets/images/apresentacao2.png')
    },
    {
      key: "3",
      titulo: "Ajude a construir um mundo mais justo e solidário.",
      paragrafo: "Junte-se a nós e ajude a construir uma sociedade melhor, onde cada pequena ação se soma a um impacto coletivo grandioso.",
      imagem: require('../../assets/images/apresentacao3.png')
    },
  ]

  const Slides = ({ item }) => {
    return (
      <SlideBody>
        <ImagemSlide
          source={item.imagem}
          style={{ width: item.imagem == require('../../assets/images/apresentacao3.png') ? "70%" : "90%" }}
        />

        <SlideText>
          <TituloH3>{item.titulo}</TituloH3>
          <Paragrafo>{item.paragrafo}</Paragrafo>
        </SlideText>
      </SlideBody>
    )
  }

  if (showHome) {
    return <Text>Entrou na home</Text>
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <LogoBranca source={require('../../assets/images/LogoBranca.png')} style={{ marginTop: 30, marginBottom: 10 }} />

        <ConteinerSlide>

          <AppIntroSlider
            data={slidesDados}
            keyExtractor={(item) => item.key}

            renderItem={Slides}

            activeDotStyle={{
              backgroundColor: '#FBFBFB',
              width: 28
            }}
            dotStyle={{
              backgroundColor: '#FBFBFB',
              width: 8
            }}

            bottomButton
            onDone={() => navigation.replace("Login")}

            renderNextButton={() =>
              <View style={styles.slideButton}>
                <Text style={styles.slideButtonText}>
                  Pular
                </Text>
              </View>
            }
            renderDoneButton={() =>
              <View style={styles.slideButton}>
                <Text style={styles.slideButtonText}>
                  Entrar
                </Text>
              </View>
            }
          />

        </ConteinerSlide>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066FF',
    alignItems: 'center'
  },
  slideButton: { 
    width: '100%', 
    height: 60, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#FBFBFB", 
    borderRadius: 30 
  },
  slideButtonText: { 
    fontFamily: 'Lexend_600SemiBold', 
    fontSize: 20, 
    color: "#0066FF" }
});