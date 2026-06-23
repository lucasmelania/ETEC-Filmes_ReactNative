import { StyleSheet, Text, View, TouchableOpacity,TextInput,Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles3 from './styles';

export default function Banner (){

    return(

          <>
               <Text style = {styles3.textBanner}> Em Cartaz </Text>
         
               <Image
               source = {require("../../../assets/Matrix2.jpg")
               }style = {styles3.imageBanner}
                />
             </>
    );


}