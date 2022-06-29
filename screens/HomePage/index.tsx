import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Transaction from "../../components/Transaction";
import Cards from "../../components/Cards";
const HomePage = () => {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pageHeader}>
        <TouchableOpacity onPress={buttonClickedHandler}>
          <Image style={styles.tinyLogo} source={require("../../assets/menu.png")} />
        </TouchableOpacity>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/profile.png")}
        />
      </View>
      <Text style={styles.Header1}>Total Balance</Text>
      <Text style={styles.Header2}>USD 4,343,000</Text>
      <Cards />
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
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 50,
  },
  pageHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
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
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
  },
  roundButton2: {
    marginTop: 20,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#ccc",
  },
});

export default HomePage;
