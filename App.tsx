import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/Home';
import TransactionsScreen from './screens/Transactions'
import SendPayment from './screens/SendPayment'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Transaction"
          component={TransactionsScreen}
        />
        <Stack.Screen
          name="Send"
          component={SendPayment}
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
  }
});