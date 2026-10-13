import { Text, Image, useWindowDimensions } from 'react-native';
import styles3 from './styles';

export default function Banner (){
    const { width } = useWindowDimensions();
    const bannerWidth = Math.min(width * 0.9, 1100);
    const bannerHeight = Math.max(360, Math.min(bannerWidth * 0.75, 600));

    return(

          <>
               <Text style = {styles3.textBanner}> Em Cartaz </Text>
         
               <Image
               source = {require("../../../assets/Matrix2.jpg")
               }style = {[styles3.imageBanner, { width: bannerWidth, height: bannerHeight }]}
               resizeMode="cover"
                />
             </>
    );


}
