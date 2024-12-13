import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import Produtos from "../../constants/Products";

export default function ProductCards() {
    return(
        
        <FlatList
            data={Produtos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={{ uri: item.imagem }} style={styles.image} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{item.nome}</Text>
                        <Text style={styles.cardPrice}>{item.preco}</Text>
                    </View>
                </View>
            )}
            numColumns={2}
        />
    )
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