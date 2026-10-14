import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Detalhes() {
  const route = useRoute();
  const { nome, nota, imagem, sinopse } = route.params;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Image style={styles.poster} source={{ uri: imagem }} />
      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.rating}>⭐ {nota}</Text>

      <View style={styles.synopsisSection}>
        <Text style={styles.synopsisTitle}>Sinopse</Text>
        <Text style={styles.synopsis}>{sinopse}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#141a29",
  },
  content: {
    alignItems: "center",
    padding: 24,
    paddingBottom: 40,
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  rating: {
    color: "#fff",
    fontSize: 16,
    marginTop: 8,
  },
  synopsisSection: {
    width: "100%",
    marginTop: 28,
  },
  synopsisTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  synopsis: {
    color: "#d4d8e0",
    fontSize: 16,
    lineHeight: 24,
  },
});
