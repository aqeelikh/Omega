import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HomePage from '../HomeScreen';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from 'react-native'
import Transaction from "../../components/Transaction";


export default function TransactionsScreen() {

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(143, 140, 140, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(143, 140, 140, ${opacity})`,
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.groupButtons}>
        <TouchableOpacity>
          <View style={{
            backgroundColor: "white",
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
            <Text style={{ color: "#000", fontWeight: "800" }}>1W</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity><Text style={{ padding: 10, fontWeight: "600" }}>1M</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ padding: 10, fontWeight: "600" }}>3M</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ padding: 10, fontWeight: "600" }}>1Y</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ padding: 10, fontWeight: "600" }}>ALL</Text></TouchableOpacity>
      </View>
      <View style={styles.accountBalance}>
        <Text style={{ fontSize: 23, fontWeight: "800" }}>USD 4,343,000</Text>
        <Text style={{ color: "grey", fontWeight: "600" }}>+2.6% from last week</Text>
      </View>
      <View style={styles.chart}>
        <BarChart
          data={data}
          width={screenWidth * .95}
          height={220}
          chartConfig={chartConfig}
          yAxisLabel=""
          yAxisSuffix=""
          withHorizontalLabels={false}
        />
      </View>
      <Transaction />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  groupButtons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F8F8F8",
    borderRadius: 30,
    padding: 10
  },
  accountBalance: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40
  },
  chart: {
    marginTop: 30
  }
});