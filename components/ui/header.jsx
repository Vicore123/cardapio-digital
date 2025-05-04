import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image, Animated, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import Cart from "./cart";

export default function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const slideAnim = React.useRef(new Animated.Value(Dimensions.get("window").width)).current;
  const router = useRouter();

  const toggleCart = () => {
    if (isCartVisible) {
      Animated.timing(slideAnim, {
        toValue: Dimensions.get("window").width,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsCartVisible(false));
    } else {
      setIsCartVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
          <Text style={styles.iconText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Restaurante Gourmet</Text>
        <TouchableOpacity style={styles.cart} onPress={toggleCart}>
          <Image
            source={{
              uri: "https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg",
            }}
            style={styles.cartImage}
          />
        </TouchableOpacity>
      </View>

      {/* Menu Lateral */}
      {isCartVisible && (
        <Animated.View style={[styles.cartMenu, { transform: [{ translateX: slideAnim }] }]}>
          <Cart onClose={toggleCart} />
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ff6347",
    padding: 15,
  },

  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  iconText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  button: {
    position: "absolute",
    top: 5,
    left: 15,
    width: 40,
    height: 45,
  },

  cart: {
    position: "absolute",
    top: 5,
    right: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 45,
  },

  cartImage: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },

  cartMenu: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "40%",
    height: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 10,
  },
});
