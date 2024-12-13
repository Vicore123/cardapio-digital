import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import Header from "../components/ui/header.jsx"
import Footer from "../components/ui/footer.jsx";

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stack screenOptions={{ headerShown: false }} />
      <Footer/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});
