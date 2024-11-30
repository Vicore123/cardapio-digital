import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Menu from "./(tabs)/menu"
import Footer from "../components/ui/footer.jsx"

export default function Layout({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Restaurante Gourmet</Text>
      </View>
      
      <Menu/>
      
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f0f0f0" },

  header: { 
    backgroundColor: "#ff6347", 
    padding: 15 },

  headerText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold", 
    textAlign: "center" },
});
