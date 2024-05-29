import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ConteinerBottom, ConteinerGeral, ConteinerText } from '../../components/Container/Conteiner';
import { IconeBarra, ImagemApresentacao, LogoBranca } from '../../components/Imagem/Imagem';
import { Paragrafo } from '../../components/Paragrafo/Paragrafo';
import { Titulo } from '../../components/Titulo/Titulo';
import { Button, TextButton } from '../../components/Botao/Style';

export default function Apresentação1() {

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }

  return (
    <View style={styles.container}>

      <ConteinerGeral>
        
        <LogoBranca source={require('../../assets/images/LogoBranca.png')} />

        <ImagemApresentacao source={require('../../assets/images/Apresentação1.png')} />

        <ConteinerText>

          <Titulo>Descubra campanhas solidárias perto de você.</Titulo>
          <Paragrafo> Explore diversas oportunidades para se envolver em ações que impactam positivamente a sua comunidade.</Paragrafo>

        </ConteinerText>

        <ConteinerBottom>

          <IconeBarra source={require('../../assets/images/Barra.png')} />

          <Button>
            <TextButton>Pular</TextButton>
          </Button>

        </ConteinerBottom>

      </ConteinerGeral>

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
