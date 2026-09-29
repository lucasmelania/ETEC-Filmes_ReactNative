import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Detalhes() {
  const route = useRoute();

  return (
    <View>
      <Text>ESSA É MINHA TELA DE DETALHES</Text>

      <Text>{route.params.nome}</Text>

      <Text>⭐ {route.params.nota}</Text>

      <Image
  style={{
    width: 200,
    height: 300,
    borderRadius: 10,
  }}
  source={{ uri: route.params.imagem }}
/>


    </View>
  );
}
