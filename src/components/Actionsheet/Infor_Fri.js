import React, { useState } from "react";
import { ActionSheetIOS, StyleSheet, Text, View } from "react-native";
import {Icon} from 'native-base';

const Infor_Fri = () => {
  const [result, setResult] = useState("");

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Xem bạn bè","Nhắn tin","Bỏ theo dõi","Chặn","Hủy kết bạn"],
          cancelButtonIndex:4,
          destructiveButtonIndex:4,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult("");//action
        } else if (buttonIndex === 2) {
          setResult("");//action
        }
      }
    );

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Icon style={{marginLeft:'50%'}} type="Entypo" name="dots-three-horizontal"  onPress={onPress}></Icon>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  result: {
    fontSize: 64,
    textAlign: "center"
  }


});

export default Infor_Fri;
