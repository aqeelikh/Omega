import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';

const Cards = () => {

const onPressButton =() => {  
    alert('You clicked the button!')  
}  
  return (
      <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}>  
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
    </ScrollView>
  );
}


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    padding: 10,
    marginTop: 50,
    },
    card: {
        width: 320,
        height: 200,
        backgroundColor: "red",
        margin: 20
    }
});

export default Cards;