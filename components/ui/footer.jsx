import React from "react";
import { Button, TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

export default function Footer() {
    return(
        <View style={styles.footer}>

            <TouchableOpacity style={styles.button} onPress={() => alert('Botão pressionado!')}>
                <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/21/21284.png"}} style={styles.buttonImage}/>
                <Text style={styles.buttonText}>Início</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => alert('Bebidas')}>
                <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/32/32436.png"}} style={styles.buttonImage}/>
                <Text style={styles.buttonText}>Bebidas</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    footer: { 
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#fff", 
        padding: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0, },

    button: {
        flexDirection: "column",
        alignItems: "center",
        width: 40,
        height: 45 },

    buttonText: { 
        fontSize: 10,
        padding: "1",
        paddingTop: "5" },

    buttonImage: {
        width: '30',
        height: '30',
        resizeMode: 'cover'}
})