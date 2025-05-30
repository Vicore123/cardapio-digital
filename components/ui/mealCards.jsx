import React from "react";
import { FlatList } from "react-native";
import Produtos from "../../constants/Products";
import Card from "./card";

export default function ProductCards() {

  const meals = Produtos.filter((produto) => produto.categoria !== "drink")

  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card item={item} />}
      numColumns={2}
    />
  );
}
