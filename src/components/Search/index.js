import { StyleSheet, Text, View, TouchableOpacity,TextInput,Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles2 from './styles';

export default function Search (){


    return(

  <View style = {styles2.containerSearch}> 
        <TextInput
        placeholder='Digite o filme que deseja buscar'
        style = {styles2.inputSearch}
        ></TextInput>
  
        <TouchableOpacity>
        <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
  
      
      </View>
  
);


}