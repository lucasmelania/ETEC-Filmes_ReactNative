import {
  StyleSheet,
  ScrollView
} from 'react-native';

import Header from '../../../src/components/Header/index.js';
import Search from '../../../src/components/Search/index.js';
import Banner from '../../../src/components/Banner/index.js';
import CardMovies from '../../../src/components/CardMovies/index.js';

export default function Home() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Header />

      <Search />

      <Banner />

      <CardMovies />
      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#141a29',
  },

  container: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30,
  },
});
