import React from "react";
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

const HomeScreen = (navigation: any) => {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };

  return (

    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.pageHeader}>
        <TouchableOpacity onPress={buttonClickedHandler}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/menu.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/profile.png")}
        />
      </View>
      <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.Header1}>Total Balance</Text>
        <Text style={styles.Header2}>USD 4,343,000</Text>
        <CardList />
        <View style={styles.screen}>
          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton1}
          >
            <Text>Top up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton1}
          >
            <Text>send</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton1}
          >
            <Text>Request</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton1}
          >
            <Text>Scan QR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton1}
          >
            <Text>More</Text>
          </TouchableOpacity>
        </View>
        <Transaction />
      </ScrollView>
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
  containerScrollView: {
    marginTop: 60,
  },
  pageHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    marginBottom: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  Header1: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },
  Header2: {
    fontSize: 25,
    fontWeight: "bold",
  },
  roundButton1: {
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "orange",
  },
});

export default HomeScreen;
