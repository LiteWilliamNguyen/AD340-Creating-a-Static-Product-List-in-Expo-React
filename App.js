import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './components/ProductList';
import Toolbar from './components/Toolbar';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductList/>
      <Toolbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
});