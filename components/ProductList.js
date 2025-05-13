import react from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const products = [
    { id: 1, name: "Laptop", image: require("../assets/laptop.png"),description: "High-performance laptop for professionals.", price: 1200},
    { id: 2, name: "Smartphone", image: require("../assets/smartphone.png"), description: "A sleek and stylish smartphone.", price: 600},
    { id: 3, name: "Headphones", image: require("../assets/headphone.png"), description: "High-quality headphones for music lovers.", price: 150},
    { id: 4, name: "Tablet", image: require("../assets/icons8-tablet-50.png"), description: "A compact and versatile tablet.", price: 400},
    { id: 5, name: "Camera", image: require("../assets/icons8-camera-50.png"),description: "A high-resolution camera for capturing moments.", price: 800},
    { id: 6, name: "Smart Watch", image: require("../assets/icons8-smart-watch-50.png"),description: "A sleek and smart watch for fitness enthusiasts.", price: 300},
    { id: 7, name: "Game Console", image: require("../assets/icons8-game-console-50.png"),description: "A powerful game console for gaming enthusiasts.", price: 500},
];

const ProductList = () => {
    return (
        <View style = {styles.container}>
            <FlatList 
            data = {products} 
            keyExtractor={(item)=> item.id.toString()}
            renderItem={({item}) => (
                <View style= {styles.card}> 
                    <Text style={styles.name}>{item.name}</Text>
                    <Image source={item.image} style={styles.image}/>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            )
            }
                />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});


export default ProductList;