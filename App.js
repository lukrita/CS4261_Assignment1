import 'react-native-gesture-handler';

import Home from './src/Home';
import NoteAdd from './src/NoteAdd';
import Header from './src/Header'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './src/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component = {Home}
          name = 'Home'
          options={{
            headerTitle: () => <Header name = "Reminders" />,
            headerStyle: {
              backgroundColor: '#030bfc',
              height:120,
            }
          }}
        />
        <Stack.Screen
          component = {NoteAdd}
          name = 'NoteAdd'
          options={{
            headerTitle: () => <Header name = "Add Reminders" />,
            headerStyle: {
              backgroundColor: '#080206',
              height:120,
            }
          }}
        />
        <Stack.Screen 
          component={Detail}
          name='Detail'
          options={{
            headerTitle: () => <Header name="Edit Notes" />,
            headerStyle: {
              backgroundColor:'#4c00b0',
              height:120,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

