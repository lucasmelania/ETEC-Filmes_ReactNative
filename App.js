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
      <View style={styles.listaFilmes}>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={movies}
          keyExtractor={(item) => item.id.toString()}

          renderItem={({ item }) => (

            <TouchableOpacity style={styles.containerFilmes}>

              {/* IMAGEM DO FILME */}
              <Image
                style={styles.images}
                source={{ uri: item.imagem }}
              />

              {/* NOME DO FILME */}
              <Text
                style={styles.titulo}
                numberOfLines={2}
              >
                {item.nome}
              </Text>

              {/* NOTA */}
              <View style={styles.notaContainer}>
                <Text>
                  ⭐
                </Text>

                <Text style={styles.textNota}>
                  8.5
                </Text>
              </View>

            </TouchableOpacity>

          )}
        />

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  scroll: {
    flex: 1,
    backgroundColor: '#141a29',
  },

  container: {
    backgroundColor: '#141a29',
    alignItems: 'center',
    paddingBottom: 30,
  },

  listaFilmes: {
    width: '90%',
  },

  containerFilmes: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingRight: 16,
    width: 140,
    height: 250,
  },

  titulo: {
    color: '#fff',
    fontSize: 12,
    paddingTop: 8,
  },

  textNota: {
    fontSize: 10,
    color: '#fff',
    paddingLeft: 4,
  },

  notaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
  },

  images: {
    width: '100%',
    height: 170,
    borderRadius: 8,
  },

});