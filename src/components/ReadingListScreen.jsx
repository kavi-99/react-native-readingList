import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';
import {useEffect} from 'react';


export function ReadingListScreen({ navigation }) {
  const addedArticles = useSelector (state => state.articles);

  useEffect(() => {
        console.log('ReadingListScreen rendered')
      });

  return(

     <ScrollView style={{flex: 1,padding: 16}}>
           {addedArticles.map((addedArticle, index) => (
             <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10,}}>
               <Text style={{fontSize: 15, flex: 1, marginRight: 8, color: 'black',}}>{addedArticle.title}</Text>
               <TouchableOpacity onPress={ () => {navigation.navigate('Details', { passedParam: index} );} } style={{padding: 10,borderRadius: 4,}}>
                  <Text style={{color: 'black',fontWeight: 'bold',}}>Details</Text>
               </TouchableOpacity>
             </View>
           ))}
     </ScrollView>

  )
};