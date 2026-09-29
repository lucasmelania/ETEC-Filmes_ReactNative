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



})

export default styles;