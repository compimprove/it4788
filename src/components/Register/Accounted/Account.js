import React, { Component } from 'react';

import { Text } from 'native-base';
export default class Index extends Component {
  _onPressButton(){
    alert("Đã có tài khoản");
}
  render() {
    return (
              <Text onPress={this._onPressButton}>Bạn đã có tài khoản?</Text>
              
    );
  }
}
