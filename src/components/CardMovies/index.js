import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

import movies from '../../../data/movies';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export default function CardMovies() {
  const navigation = useNavigation();

  return (
    <View style={styles.listaFilmes}>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.containerFilmes}
            onPress={() =>
              navigation.navigate('Detalhes', {
                nome: item.nome, nota: item.nota, imagem: item.imagem
              })
            }
          >

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
                {item.nota}
              </Text>
            </View>

          </TouchableOpacity>

        )}
      />

    </View>
  );
}
