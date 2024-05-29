
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

import { useFonts } from 'expo-font';
import Apresentação1 from './src/screens/Apresentacao/Apresentacao1';
import Cadastro from './src/screens/Cadastro/Cadastro';
import Login from './src/screens/Login/Login';

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
          name='Apresentação1'

          component={Apresentação1}

          options={{ title: 'Apresentação1' }}
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

