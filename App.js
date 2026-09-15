import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import Header from './src/components/Header';
import Search from './src/components/Search';
import Banner from './src/components/Banner';
import movies from './data/movies';
import CardMovies from './src/components/CardMovies';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* INICIO DA HEADER */}
      <Header />

      {/* INICIO DA BARRA DE PESQUISA */}
      <Search />

      {/* INICIO DO BANNER */}
      <Banner />

      {/* INICIO DOS FILMES */}

      <CardMovies/>


    

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  scroll: {
    flex: 1,
    backgroundColor: '#141a29',
  },
  container: {
    alignItems: 'center',
    paddingBottom: 30,
  },

});