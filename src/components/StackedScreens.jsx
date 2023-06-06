import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen } from './SearchScreen';
import { SecondScreen } from './SecondScreen.jsx';
import { ModalScreen } from './ModalScreen.jsx';
import { useEffect } from 'react';
/*createNativeStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator.
Both of them are React components used for configuring the navigator.
The Navigator should contain Screen elements as its children to define the configuration for routes.*/
const Stack = createNativeStackNavigator();

export function StackedScreens() {
  useEffect(() => {
             console.log('StackedScreens rendered')
           })
  return(
    <Stack.Navigator>
    <Stack.Group>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Screen 2" component={SecondScreen} />
    </Stack.Group>
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name='Modal' component={ModalScreen} />
    </Stack.Group>
    </Stack.Navigator>
  )
};