import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import { View, ScrollView, Text, TextInput, Button, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../../store/actions';

export function SearchScreen({ navigation }) {

  const [articles, setArticles] = useState([]);
  //const [query, setQuery] = useState('');
  //const [isLoading, setLoading] = useState(true);
  const isLoading = useRef(true);
  const queryRef = useRef('');

  useEffect(() => {
    console.log('SearchScreen rendered')
  })

  useEffect(() => {
      console.log('SearchScreen rendered for articles')
    }, [articles])

    /*useEffect(() => {
          console.log('SearchScreen rendered for query')
     }, [query])*/

    useEffect(() => {
      fetchNews();
    }, []);

    const fetchNews = () => {
      const apiKey = '7ebe02fc58bd4fbd979a78da29fdbb0a';
      fetch(`https://newsapi.org/v2/everything?q=${queryRef.current}&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => setArticles(data.articles))
        .catch(error => console.log('Error fetching news:', error))
        .finally(() => isLoading.current = false);
       //set isLoading to false once fetched.
    };

  const dispatch = useDispatch();

  const handleAddArticle = (articleItem) => {
    dispatch(addToList(articleItem));
  }


  const addedArticles = useSelector( state => state.articles );

  return (
    <View style={{ flex: 1, padding:16}}>
      {/*<Text style={{padding: 15}}>Take some user input in this screen for fetching the api data. Once fetched it should navigate to Screen 3(Articles List) and show the fetched data there. Make a button View Articles/Results to go to Screen 3</Text>*/}

      <View styles={{flexDirection: 'row', marginBottom: 16,}}>
        <Text style={{ fontSize: 22 }}>Search for News Articles!</Text>
        <Text style={{ fontSize: 17 }}>Enter a search query: </Text>
        <TextInput
              style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 8,}}
              placeholder="e.g., technology, health, TV"
              //onChangeText={newQuery => setQuery(newQuery)}
              onChangeText={ (newQuery) => { queryRef.current = newQuery } }
              defaultValue={queryRef.current}
        />

        <Button title='Search' onPress={ () => fetchNews() }/>
      </View>

      <View style={{flex: 1, padding: 4}}>
        {
        <ScrollView style={{flex:1, borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 10 }}>
            { isLoading.current ? ( <ActivityIndicator /> ) : ( articles && articles.map((article, index) => (
              <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10,}}>
                <Text style={{fontSize: 15, flex: 1, marginRight: 8, color: 'black',}}>{article.title}</Text>
                <TouchableOpacity onPress = { () => { handleAddArticle(article) }} style={{backgroundColor: 'green',padding: 6,borderRadius: 4,}}>
                  <Text style={{color: 'white',fontWeight: 'bold',}}>+</Text>
                </TouchableOpacity>
              </View>
            )))}
        </ScrollView>
        }
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginRight: 10, }}>
        <Button title='Go to Reading List' onPress = {() => { navigation.navigate('Reading List Screens'); }}/>
        <Text style={{backgroundColor: '#ccc', padding: 6,borderRadius: 4, marginLeft: 10, fontSize: 17, fontWeight: 'bold'}}>{addedArticles.length}</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginTop: 10, }}>
        <View style={{ marginRight: 15 }}>
          <Button title="Screen 2" onPress={() => { navigation.navigate('Screen 2', { passedParam: queryRef.current }); }} />
        </View>
        <Button title="Open Modal" onPress={() => { navigation.navigate('Modal', { passedParam: queryRef.current }); }} />
      </View>

    </View>

  );
};