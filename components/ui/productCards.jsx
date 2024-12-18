import React from "react";
import { FlatList } from "react-native";
import Produtos from "../../constants/Products";
import Card from "./card";

export default function ProductCards() {
  return (
    <FlatList
      data={Produtos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card item={item} />}
      numColumns={2}
    />
  );
}
