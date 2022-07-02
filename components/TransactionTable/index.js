import React from "react";
import { Text, View, Image } from "react-native";
import { DataTable } from "react-native-paper";
import { StyleSheet } from "react-native";

const TransactionTable = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Row>
        <DataTable.Cell>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/profile.png")}
          />
        </DataTable.Cell>
        <DataTable.Cell>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Text>Khalid Aqeeli</Text>
            <Text>8:00 pm . The Roof Vox cinema</Text>
          </View>
        </DataTable.Cell>
        <DataTable.Cell>+ USD 23.59</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/profile.png")}
          />
        </DataTable.Cell>
        <DataTable.Cell>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Text>Khalid Aqeeli</Text>
            <Text>8:00 pm . The Roof Vox cinema</Text>
          </View>
        </DataTable.Cell>
        <DataTable.Cell>+ USD 23.59</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/profile.png")}
          />
        </DataTable.Cell>
        <DataTable.Cell>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Text>Khalid Aqeeli</Text>
            <Text>8:00 pm . The Roof Vox cinema</Text>
          </View>
        </DataTable.Cell>
        <DataTable.Cell>+ USD 23.59</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/profile.png")}
          />
        </DataTable.Cell>
        <DataTable.Cell>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Text>Khalid Aqeeli</Text>
            <Text>8:00 pm . The Roof Vox cinema</Text>
          </View>
        </DataTable.Cell>
        <DataTable.Cell>+ USD 23.59</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/profile.png")}
          />
        </DataTable.Cell>
        <DataTable.Cell>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Text>Khalid Aqeeli</Text>
            <Text>8:00 pm . The Roof Vox cinema</Text>
          </View>
        </DataTable.Cell>
        <DataTable.Cell>+ USD 23.59</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/profile.png")}
          />
        </DataTable.Cell>
        <DataTable.Cell>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Text>Khalid Aqeeli</Text>
            <Text>8:00 pm . The Roof Vox cinema</Text>
          </View>
        </DataTable.Cell>
        <DataTable.Cell>+ USD 23.59</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
});

export default TransactionTable;
