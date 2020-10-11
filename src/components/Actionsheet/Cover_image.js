import React, { useState } from "react";
import { ActionSheetIOS, StyleSheet, Text, View } from "react-native";
import {Icon} from 'native-base';

const Cover_image = () => {
  const [result, setResult] = useState("");

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Xem ảnh bìa","Tải ảnh lên","Chọn ảnh trên facebook","Tạo nhóm ảnh bìa","Chọn ảnh nghệ thuật"],
        
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
      <Icon type="Entypo" name="camera"  onPress={onPress}></Icon>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  result: {
    fontSize:20,
    textAlign: "center"
  }


});

export default Cover_image;
