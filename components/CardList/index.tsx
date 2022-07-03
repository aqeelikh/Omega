import React from "react";
import { View, StyleSheet, Button, ScrollView } from "react-native";
import Card from "../Cards/index";
const CardList = () => {
 
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <Card name="Huda Alsharfi" cardNumber="5430 4900 3232 9755" isVisa={false} />
      <Card name="Khalid Aqeeli" cardNumber="1430 2800 1555 9292" isVisa={true}/>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
    marginTop: 50,
  },
  card: {
    width: 320,
    height: 200,
    margin: 20,
  },
  cardImage: {
    width: 320,
    height: 200,
  },
});

export default CardList;
