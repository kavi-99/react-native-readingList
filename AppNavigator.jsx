import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StackedScreens } from './src/components/StackedScreens.jsx';
import { ListAndDetails } from './src/components/ListAndDetailsScreen.jsx';
import {useEffect} from 'react';


export function AppNavigator(){
    const Tab = createBottomTabNavigator();
    useEffect(() => {
                        console.log('AppNavigator rendered')
                                                    })
    return(
       <NavigationContainer>
          {/*<Tab.Navigator screenOptions={{headerShown: false}}>*/}
          <Tab.Navigator>
            <Tab.Screen name="StackedScreens" component={StackedScreens} options={{ title: 'Home', headerShown: false}}/>
            <Tab.Screen name="Reading List Screens" component={ListAndDetails} options={{ title: `Reading List`, headerShown: false}} />
            {/*<Tab.Screen name="Screen 3" component={ThirdScreen} options={{ title: 'Screen 3 (Empty)'}} />*/}
          </Tab.Navigator>
        </NavigationContainer>
    )

}