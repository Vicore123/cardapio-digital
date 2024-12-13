import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Card({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.nome}</Text>
        <Text style={styles.cardPrice}>{item.descricao}</Text>
        <Text style={styles.cardTitle}>{item.preco}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 15,
        marginBottom: 0,
        marginRight: 0,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: "47%",
    },

    image: { width: 150, height: 150 },
    cardContent: { flex: 1, padding: 10, justifyContent: "center" },
    cardTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
    cardPrice: { fontSize: 14, color: "#666" },
})