import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromList } from '../../store/actions';

export function ModalDetailsScreen({ route, navigation }) {
    const { passedParam } = route.params;
    const addedArticles = useSelector (state => state.articles);
    const addedArticle = addedArticles[passedParam];

    console.log(addedArticles.length);

    const dispatch = useDispatch();

    const handleRemoveArticle = (index) => {
       dispatch(removeFromList(index))
    }

    return (

      <ScrollView style={{flex: 1,padding: 16}}>
                   <View style={{flexDirection: 'column', marginBottom: 10,}}>
                     <Text style={{fontSize: 20, flex: 1, marginRight: 8, marginBottom: 10, color: 'black',}}>{addedArticle.title}</Text>
                     <Text style={{fontSize: 17, flex: 1, marginRight: 8, marginBottom: 10, color: 'black',}}>Author: {addedArticle.author}</Text>
                     <Text style={{fontSize: 17, flex: 1, marginRight: 8, marginBottom: 10, color: 'black',}}>Date Published: {addedArticle.publishedAt}</Text>
                     <Text style={{fontSize: 17, flex: 1, marginRight: 8, marginBottom: 10, color: 'black',}}>Link to Article: {addedArticle.url}</Text>
                     <TouchableOpacity onPress={ () => { handleRemoveArticle(passedParam); navigation.goBack() }} style={{padding: 10,borderRadius: 4, borderColor: '#ccc', alignItems:'center', justifyContent: 'center',}}>
                       <Text style={{ color: 'darkred', fontWeight: 'bold', fontSize: 20 }}>Remove From List</Text>
                     </TouchableOpacity>
                   </View>
      </ScrollView>
    );
}