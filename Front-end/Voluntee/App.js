import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Titulo } from './src/components/Titulo/Titulo';
import { ConteinerBottom, ConteinerGeral, ConteinerText } from './src/components/Container/Conteiner';
import { Paragrafo } from './src/components/Paragrafo/Paragrafo';

import { useFonts } from 'expo-font';
import { IconeBarra, ImagemApresentacao, LogoBranca } from './src/components/Imagem/Imagem';
import { Button, TextButton } from './src/components/Botao/Style';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Lexend': require('./src/assets/fonts/Lexend-VariableFont_wght.ttf'),
  });

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
        
        <LogoBranca source={require('./src/assets/images/LogoBranca.png')} />

        <ImagemApresentacao source={require('./src/assets/images/Apresentação1.png')} />

        <ConteinerText>

          <Titulo>Descubra campanhas solidárias perto de você.</Titulo>
          <Paragrafo> Explore diversas oportunidades para se envolver em ações que impactam positivamente a sua comunidade.</Paragrafo>

        </ConteinerText>

        <ConteinerBottom>

          <IconeBarra source={require('./src/assets/images/Barra.png')} />

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
