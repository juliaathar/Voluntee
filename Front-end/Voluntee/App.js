//Navegacao
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

//Telas
import { Cadastro } from './src/screens/Cadastro/Cadastro';
import { Login } from './src/screens/Login/Login';
import { Apresentacao } from './src/screens/Apresentacao/Apresentacao';
import { Home } from './src/screens/Home/Home';

import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Eduardo } from './src/screens/Testes/eduardo';
import { Pedro } from './src/screens/Testes/pedro';

//Fontes
import { useFonts } from 'expo-font';
import { 
  Lexend_400Regular, 
  Lexend_500Medium, 
  Lexend_600SemiBold, 
  Lexend_700Bold, 
} from '@expo-google-fonts/lexend';

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
          name='Home'
          component={Home}
          options={{ title: 'Home' }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  )
}

