import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AlertButton from "./AlertButton";

const Toolbar = () => {
    return (
        <View style = {styles.container}>
            <AlertButton message="This is a warning!" style={[ styles.button, styles.warningButton ]} textStyle={styles.buttonText}>Warning Button</AlertButton>
            <AlertButton message="Something went wrong!" style={[ styles.button, styles.errorButton ]} textStyle={styles.buttonText}>Error Button</AlertButton>
            <AlertButton message="You're doing great!" style={[ styles.button, styles.successButton ]} textStyle={styles.buttonText}>Success Button</AlertButton>
            <AlertButton message="This is a long message that will wrap to multiple lines..." style= {styles.button} textStyle={styles.buttonText}>Long Message Button</AlertButton>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  warningButton: {
    backgroundColor: "#ffd700",
    borderColor: "#ffd700",
  },
  errorButton: {
    backgroundColor: "#ff3737",
    borderColor: "#ff3737",
  },
  successButton: {
    backgroundColor: "#34c759",
    borderColor: "#34c759",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default Toolbar;