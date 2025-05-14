import React from "react";
import { Alert,Pressable, Text, StyleSheet } from "react-native";

const AlertButton = ({message, children}) => {
    const handlePress = () => {
        Alert.alert('Alert', message);
    };

    return (
        <Pressable onPress={handlePress} style={styles.button}>
            <Text style= {styles.buttonText}> {children}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4682B4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AlertButton;