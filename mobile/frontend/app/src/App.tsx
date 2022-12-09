import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';

export type RootStackParamList = {
  Home: undefined;
  Survey: {id: number; title: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Survey" component={Survey} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
