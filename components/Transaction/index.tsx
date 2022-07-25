import Reac from "react";
import { Text, View, Alert, TouchableOpacity } from "react-native";
import TransactionTable from "../TransactionTable";
import { useNavigation } from '@react-navigation/native';


const Transaction = () => {

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Transaction
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('TransactionPage')}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: "grey",
            }}
          >
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <TransactionTable />
    </View>
  );
};

export default Transaction;
