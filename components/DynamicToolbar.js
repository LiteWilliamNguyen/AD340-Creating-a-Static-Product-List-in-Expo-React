import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AlertButton from "./AlertButton";

const DynamicToolbar = () => {
    const buttons = [
        { message: "Dynamic Warning", children: "Warning Button" },
        { message: "Dynamic Error", children: "Error Button" },
        { message: "Dynamic Success", children: "Success Button" },
        { message: "Dynamic Long Message", children: "Long Message Button" },
    ];

    return (
        <View style= {styles.container}>
            {buttons.map((button, index) => (
                <AlertButton key = {index} message = {button.message}>{button.children}</AlertButton>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      justifyContent: "flex-start", // Change from "center" to "flex-start"
      alignItems: "center",
      backgroundColor: "#f7f7f7",
      padding: 15,
      borderRadius: 10,
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      flex: 1, // Add this property to make the container take up the full height
    },
});

export default DynamicToolbar;