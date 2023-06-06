import React from 'react';
import { View, Text, Button } from 'react-native';
import {useEffect} from 'react';

export function ModalScreen({ route, navigation }){
  const { passedParam } = route.params;
  useEffect(() => {
             console.log('ModalScreen rendered')
           })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>{JSON.stringify(passedParam)}</Text>
      <Text> </Text>
      <Button title='Go Back' onPress={() => {navigation.goBack()}}/>
    </View>
  );
};