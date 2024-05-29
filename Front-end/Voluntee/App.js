import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Eduardo } from './src/screens/testes/eduardo';
import { Pedro } from './src/screens/testes/pedro';
import { Navegacao } from './src/screens/Navegacao/Navegacao';

export default function App() {

  //instancia do StackNavigator
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Navegacao'
          component={Navegacao}
          options={{ title: 'Pedro' }}
        />

        <Stack.Screen
          name='Eduardo'
          component={Eduardo}
          options={{ title: 'Eduaro' }}
        />

        <Stack.Screen
          name='Pedro'
          component={Pedro}
          options={{ title: 'Pedro' }}
        />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}
