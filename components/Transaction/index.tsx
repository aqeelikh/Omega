import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import TransactionTable from "../TransactionTable";

const Transaction = () => {
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
        <TouchableOpacity>
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
