
import { StyleSheet, Text, View, TouchableOpacity,TextInput,Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/Header';
import Search from './src/components/Search';
export default function App() {
  return (
    <View style={styles.container}>
     
     
    {/*INICIO DA HEADER */}

    <Header></Header>

  
     {/*INICIO DA BARRA DE PESQUISA */}

   <Search></Search>



      {/*INICIO DO BANNER */}

      <Text style = {styles.textBanner}> Em Cartaz </Text>

      <Image
      source = {require("./assets/Matrix2.jpg")
      }style = {styles.imageBanner}
       />
    
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

containerSearch:{

  marginTop:20,
  width:"90%",
  backgroundColor:'white',
  borderRadius:5,
  padding:8,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems: 'center'
},

inputSearch: {

  height: 40,
  padding: 4,
  width: '100%'
},


//Banner
imageBanner: {
width:'90%',
height:350,
 marginTop:15,
 borderRadius:10
},

 textBanner:  {

  color:'white',
  width:'90%',
  fontSize:30,
  marginTop:20,
  fontWeight:'bold'
  
 }

});