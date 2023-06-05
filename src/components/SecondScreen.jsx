import * as React from 'react';
import { View, Text } from 'react-native';

export function SecondScreen({ route, navigation }) {
  const { passedParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/*}<Text>Screen 2</Text>*/}
      <Text style={{ fontSize: 30 }}>{JSON.stringify(passedParam)}</Text>
    </View>
  );
};