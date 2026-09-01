import { StyleSheet, Text, View, TouchableOpacity,TextInput,Image,FlatList } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import movies from '../../../data/movies';
import styles from './styles';

export default function CardMovies (){

    return(

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
                         {item.nota}
                        </Text>
                      </View>
        
                    </TouchableOpacity>
        
                  )}
                />
        
              </View>

         
    );


}