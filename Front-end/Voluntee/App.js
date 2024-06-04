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

import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Eduardo } from './src/screens/Testes/eduardo';
import { Pedro } from './src/screens/Testes/pedro';
import { Joao } from './src/screens/Testes/joao';

//Fontes
import { useFonts } from 'expo-font';
import { 
  Lexend_400Regular, 
  Lexend_500Medium, 
  Lexend_600SemiBold, 
  Lexend_700Bold, 
} from '@expo-google-fonts/lexend';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';
import { RedefinirSenha } from './src/screens/RedefinirSeha/RedefinirSenha';
import { Perfil } from './src/screens/Perfil/Perfil';


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
          name='Navegacao'
          component={Navegacao}
          options={{ title: 'Navegacao' }}
        />

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
          name='Eduardo'
          component={Eduardo}
          options={{ title: 'Eduardo' }}
        />

        <Stack.Screen
          name='Pedro'
          component={Pedro}
          options={{ title: 'Pedro' }}
        />

        <Stack.Screen
          name='Joao'
          component={Joao}
          options={{ title: 'Joao' }}
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

      </Stack.Navigator>

    </NavigationContainer>

  )
}

