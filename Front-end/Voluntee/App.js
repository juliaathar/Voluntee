import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

import { useFonts } from 'expo-font';
import { Cadastro } from './src/screens/Cadastro/Cadastro';
import { Login } from './src/screens/Login/Login';
import { Apresentacao } from './src/screens/Apresentacao/Apresentacao';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Lexend': require('./src/assets/fonts/Lexend-VariableFont_wght.ttf'),
  });

  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        {/* <Stack.Screen
          name='Apresentacao'

          component={Apresentacao}

          options={{ title: 'Apresentacao' }}
        /> */}

        <Stack.Screen
          name='Cadastro'

          component={Cadastro}

          options={{ title: 'Cadastro' }}
        />

        <Stack.Screen
          name='Login'

          component={Login}

          options={{ title: 'Login' }}
        >

        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>

  )
}

