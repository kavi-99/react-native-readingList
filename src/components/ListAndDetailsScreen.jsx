import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { ReadingListScreen } from './ReadingListScreen.jsx';
import { ModalDetailsScreen } from './ModalDetailsScreen.jsx';
import {useEffect} from 'react';

export function ListAndDetails() {

   const addedArticles = useSelector (state => state.articles);
   const Stack = createNativeStackNavigator();

   useEffect(() => {
              console.log('ListAndDetailsScreen rendered')
            })

   return(
      <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name= 'Reading List' component={ReadingListScreen} options={{title:`Reading List  { ${addedArticles.length} }`}}/>
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Details' component={ModalDetailsScreen} />
      </Stack.Group>
      </Stack.Navigator>
   )
}