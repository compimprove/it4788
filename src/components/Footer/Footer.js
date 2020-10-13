import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';
export default class EditPage extends Component {
  constructor(props) {
    super(props);
  }
  _onPressButton1() {
    alert("Bạn đã có tài khoản")
  }
  render() {
    let btnOnlick = this.props.onClick === undefined ? this._onPressButton1.bind(this) : this.props.onClick;
    return (
      <Footer>
        <FooterTab>
          <Button onPress={btnOnlick}>
            <Text style={{ color: '#1877F2' }}>Tạo tài khoản facebook mới</Text>
          </Button>
        </FooterTab>
      </Footer>

    );
  }
}
const styles = StyleSheet.create({

});
