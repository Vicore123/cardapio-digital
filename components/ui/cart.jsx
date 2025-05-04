import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Cart({ onClose }) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho do Menu */}
      <View style={styles.header}>
        <Text style={styles.title}>Carrinho</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>Fechar</Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo do Menu */}
      <View style={styles.content}>
        <Text style={styles.item}>Item 1</Text>
        <Text style={styles.item}>Item 2</Text>
        <Text style={styles.item}>Item 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  closeButton: {
    fontSize: 16,
    color: "red",
  },
  content: {
    flex: 1,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});
