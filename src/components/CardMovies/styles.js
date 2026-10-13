import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //CARDMOVIES

  container: {
    backgroundColor: '#141a29',
    alignItems: 'center',
    paddingBottom: 30,
    
  },

  listaFilmes: {
    width: '90%',
     alignSelf: 'center',
  },

  containerFilmes: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingRight: 16,
  },

  titulo: {
    color: '#fff',
    fontSize: 14,
    paddingTop: 8,
  },

  textNota: {
    fontSize: 12,
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
    borderRadius: 8,
  },



})

export default styles;