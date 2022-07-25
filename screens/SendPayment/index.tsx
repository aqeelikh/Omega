import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import Transaction from "../../components/Transaction";
import CardList from "../../components/CardList";

const SendPayment = (navigation: any) => {

  const sendMoney = () => {
    console.log("You just sent 100$");
    // do something
  };

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.receiver}>

      </View>
      <View style={styles.paymentAmount}>

      </View>
      <View style={styles.keyboard}>

      </View>
      <TouchableOpacity>
        <Text>Send Money</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  receiver: {

  },
  paymentAmount: {

  },
  keyboard: {

  }
});

export default SendPayment;
