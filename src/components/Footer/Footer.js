import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Footer, FooterTab, Button, Text } from 'native-base';
export default class EditPage extends Component {
    _onPressButton1(){
        alert("Bạn đã có tài khoản")
      }
  render() {
    return (
    
    <Footer>
        <FooterTab>
        <Button onPress={this._onPressButton1}>
            <Text style={{color:'#1877F2'}}>Tạo tài khoản facebook mới</Text>
          </Button>

        </FooterTab>
      </Footer>
    
    );
  }
}
const styles = StyleSheet.create({
    
});
