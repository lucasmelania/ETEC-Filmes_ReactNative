import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions
} from 'react-native';

import movies from '../../../data/movies';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export default function CardMovies() {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const cardWidth = Math.min(
    250,
    Math.max(130, width * (width < 600 ? 0.42 : width < 1000 ? 0.32 : 0.24))
  );
  const posterHeight = cardWidth * 1.45;
  const cardHeight = posterHeight + 80;

  return (
    <View style={[styles.listaFilmes, { height: cardHeight + 20 }]}>

      <ScrollView
        horizontal={true}
        scrollEnabled
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
      >
        {movies.map((item) => (
          <TouchableOpacity
            key={item.id.toString()}
            style={[styles.containerFilmes, { width: cardWidth, height: cardHeight }]}
            onPress={() =>
              navigation.navigate('Detalhes', {
                nome: item.nome,
                nota: item.nota,
                imagem: item.imagem,
                sinopse: item.sinopse,
              })
            }
          >

            {/* IMAGEM DO FILME */}
            <Image
              style={[styles.images, { height: posterHeight }]}
              source={{ uri: item.imagem }}
              resizeMode="cover"
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
        ))}
      </ScrollView>

    </View>
  );
}
