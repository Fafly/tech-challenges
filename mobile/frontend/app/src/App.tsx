import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';
import SurveyDetail from './pages/SurveyDetail/SurveyDetail';
import {SurveyData} from './utils/types';

export type RootStackParamList = {
  Home: undefined;
  Survey: {id: number; title: string};
  SurveyDetail: {data: SurveyData; title: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2D9CDB',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Surveys'}}
        />
        <Stack.Screen
          name="Survey"
          component={Survey}
          options={({route}) => ({title: route.params.title})}
        />
        <Stack.Screen
          name="SurveyDetail"
          component={SurveyDetail}
          options={({route}) => ({title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
