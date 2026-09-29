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
import Rotas from './src/Rotas/index.js';

export default function App() {
  return (

    <Rotas></Rotas>

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