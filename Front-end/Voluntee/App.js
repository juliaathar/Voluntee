//Navegacao
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

//Telas
import { Cadastro } from './src/screens/Cadastro/Cadastro';
import { Login } from './src/screens/Login/Login';
import { Apresentacao } from './src/screens/Apresentacao/Apresentacao';
import { Home } from './src/screens/Home/Home';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';
import { Perfil } from './src/screens/Perfil/Perfil';
import { Campanha } from './src/screens/Campanha/Campanha';
import { NovaCampanha } from './src/screens/NovaCampanha/NovaCampanha';
//Fontes
import { useFonts } from 'expo-font';
import {
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
} from '@expo-google-fonts/lexend';
import { Instituicao } from './src/screens/Instituiçao/Instituicao';

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold
  });
  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen
          name='Apresentacao'
          component={Apresentacao}
          options={{ title: 'Apresentacao' }}
        />

        <Stack.Screen
          name='Cadastro'
          component={Cadastro}
          options={{ title: 'Cadastro' }}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home' }}
        />

        <Stack.Screen
          name='RecuperarSenha'
          component={RecuperarSenha}
          options={{ title: 'RecuperarSenha' }}
        />

        <Stack.Screen
          name='VerificarEmail'
          component={VerificarEmail}
          options={{ title: 'VerificarEmail' }}
        />

        <Stack.Screen
          name='RedefinirSenha'
          component={RedefinirSenha}
          options={{ title: 'RedefinirSenha' }}
        />

        <Stack.Screen
          name='Perfil'
          component={Perfil}
          options={{ title: 'Perfil' }}
        />

        <Stack.Screen
          name='Campanha'
          component={Campanha}
          options={{ title: 'Campanha' }}
        />

        <Stack.Screen
          name='NovaCampanha'
          component={NovaCampanha}
          options={{ title: 'NovaCampanha' }}
        />

        <Stack.Screen
          name='Instituicao'
          component={Instituicao}
          options={{ title: 'Instituicao' }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  )
}

