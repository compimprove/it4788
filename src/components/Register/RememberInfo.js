import React, { useState } from "react";
import { View,Text, StyleSheet, Button, Alert } from "react-native";
import {Item} from 'native-base';
import PopRememberPass from "../Popup/PopRememberPass";
const RememberInfo = () => {


  return (
      <Item>
    <View style={styles.container}>
      <PopRememberPass />
    </View>
    </Item>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:30,
    flexDirection:'row',
    marginBottom:10
  },
  text: {
    fontSize:20,
    fontWeight:'bold'
  }
});

export default RememberInfo;
