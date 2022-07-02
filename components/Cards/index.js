import React from "react";
import { View, Image, StyleSheet, Button, ScrollView } from "react-native";
import Svg, {
  Rect,
  G,
  Circle,
  Path,
  Text,
  TSpan,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"

const Card = (props) => {
  const onPressButton = () => {
    alert("You clicked the button!");
  };
  const onCardClick = () => {
    alert("You clicked the card!");
  };
  return (
    <View style={styles.card}>
      <Svg
        width={321}
        height={192}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onPress={() => {
          console.log('onPress rect ' + props.name);
        }}
      >
        <Rect y={1} width={319.316} height={190.036} rx={23} fill="url(#a)" />
        <G fill="#1D1D1D">
          <Circle cx={40.572} cy={104.544} r={34.214} fillOpacity={0.4} />
          <Circle cx={56.89} cy={79.804} r={34.214} fillOpacity={0.6} />
        </G>
        <Circle
          cx={274.103}
          cy={155.713}
          r={12.716}
          fill="#F9CCD1"
          fillOpacity={0.62}
        />
        <Circle
          opacity={0.36}
          cx={289.645}
          cy={155.713}
          r={12.716}
          fill="#424242"
        />
        <G stroke="#fff" strokeWidth={2}>
          <Path d="m195.618 1.09 27.103 61.115a19.999 19.999 0 0 0 13.179 11.23l27.811 7.34L320 95.358" />
          <Path d="m209.11 1 23.637 51.587a20 20 0 0 0 12.69 10.9l32.443 9.265 41.297 11.793" />
          <Path d="M223.095 1.706 242.818 46a20 20 0 0 0 12.947 11.143l27.172 7.503 36.276 10.018" />
        </G>
        <Text
          fill="#fff"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={18}
          fontWeight={500}
          letterSpacing={0}
        >
          <TSpan x={18.368} y={92.858}>
            {props.cardNumber}
          </TSpan>
        </Text>
        <Text
          fill="#fff"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={12}
          letterSpacing={0}
        >
          <TSpan x={18.368} y={151.958}>
            {props.name}
          </TSpan>
        </Text>
        <Text
          fill="#fff"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={12}
          letterSpacing={0}
        >
          <TSpan x={193.568} y={170.326}>
            {"11/11/24"}
          </TSpan>
        </Text>
        <Text
          fill="#fff"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={10}
          fontWeight={500}
          letterSpacing={0}
        >
          <TSpan x={193.568} y={153.997}>
            {"Vaild date"}
          </TSpan>
        </Text>
        <Defs>
          <LinearGradient
            id="a"
            x1={311.545}
            y1={3.119}
            x2={2.119}
            y2={189.623}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#0A0A0A" />
            <Stop offset={1} stopColor="#1D1D1D" stopOpacity={0.76} />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
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

export default Card;
