
import { StyleSheet, Text, View, TouchableOpacity,TextInput,Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/Header';
import Search from './src/components/Search';
import Banner from './src/components/Banner';
import movies from './data/movies'
import { FlatList } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
     
     
    {/*INICIO DA HEADER */}

    <Header></Header>

     {/*INICIO DA BARRA DE PESQUISA */}

   <Search></Search>

      {/*INICIO DO BANNER */}

      <Banner></Banner>

      <View style = {{width:'90%'}}>

<FlatList
 horizontal= {true}
data={movies} 
keyExtractor={(item)=> item.id}
renderItem={({item}) => (

<TouchableOpacity>
<Image style ={{width:80,height:100}} source={{uri:item.imagem}}></Image>
  <Text>{item.nome}</Text>
</TouchableOpacity>



)}

/>



      </View>

  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: '#141a29',
    
  },


//HEADER



// SEARCH BAR



});