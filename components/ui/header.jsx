import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default function Header() {
    return(
        <View style={styles.header}>
          <Text style={styles.headerText}>Restaurante Gourmet</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  
    header: {
      backgroundColor: "#ff6347",
      padding: 15,
    },
  
    headerText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  