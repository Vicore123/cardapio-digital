import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import ProductCards from "@/components/ui/productCards"

export default function Menu() {
  return (
    <View style={styles.menu}>
      <ProductCards/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  menu: {
    // padding:"10",
    // paddingBottom:"65",
    // alignItems: "center"
  }
});
