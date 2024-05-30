import { ConteinerGeral, ConteinerText } from '../../components/Container/Style';
import { ImagemApresentacao, LogoBranca } from '../../components/Imagem/Imagem';
import { BolinhaSlide } from '../../components/BolinhaSlide/Bolinha';
import { Paragrafo } from '../../components/Paragrafo/Paragrafo';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Titulo } from '../../components/Titulo/Titulo';
import { Botao } from '../../components/Botao/Botao';
import { useState } from 'react';

export const Apresentacao = () => {

  const [passo, setPasso] = useState(1)

  const titulos = [
    "Descubra campanhas solidárias perto de você.",
    "Envolva-se em projetos significativos.",
    "Ajude a construir um mundo mais justo e solidário."
  ]

  const paragrafos = [
    "Explore diversas oportunidades para se envolver em ações que impactam positivamente a sua comunidade.",
    "Participe de iniciativas que realmente fazem a diferença e contribua para a transformação de vidas.",
    "Junte-se a nós e ajude a construir uma sociedade melhor, onde cada pequena ação se soma a um impacto coletivo grandioso."
  ]


  return (
    <SafeAreaView style={styles.container}>

      <ConteinerGeral>

        <LogoBranca source={require('../../assets/images/LogoBranca.png')} />

        {passo == 1 ?
          <ImagemApresentacao source={require('../../assets/images/apresentacao1.png')} />
          :
          passo == 2 ?
            <ImagemApresentacao source={require('../../assets/images/apresentacao2.png')}/>
            :
            <ImagemApresentacao source={require('../../assets/images/apresentacao3.png')} style={{width : "70%"}}/>
        }

        <ConteinerText>

          <Titulo>{titulos[passo - 1]}</Titulo>
          <Paragrafo>{paragrafos[passo - 1]}</Paragrafo>

        </ConteinerText>
        <BolinhaSlide
          passo={passo}
        />
        <Botao
          textoBotao={passo != 3 ? "Pular" : "Continuar"}
          onPress={() => {
            switch (passo) {
              case 1:
                setPasso(2)
                break;
              case 2:
                setPasso(3)
                break;
              case 3:
                setPasso(1)
                break;

              default:
                break;
            }
          }}
        />

      </ConteinerGeral>

    </SafeAreaView>
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