import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import TransactionsScreen from './screens/TransactionsPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
      name="TransactionPage" 
      component={TransactionsScreen} 
      />
    </Stack.Navigator>
    </NavigationContainer>
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