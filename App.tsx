import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import HomePage from './screens/HomePage'
export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomePage />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
  }
});