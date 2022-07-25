import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import HomePage from '../HomeScreen';

export default function TransactionsScreen() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>All Transactions Page</Text>
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