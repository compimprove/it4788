import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import Footer from '../Footer/Footer';
import { Container, Content, Text, DatePicker } from 'native-base';

import UserRegisterData from '../../models/UserRegisterData';

export default class ChoseDate extends Component {

  _onPressButton1() {
    alert("Back");
  }
  constructor(props) {
    super(props);
    this.state = { chosenDate: -1 };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    console.log("chose date" + newDate.toString());
    this.setState({ chosenDate: newDate });
  }
  onSubmit() {
    if (this.state.chosenDate == -1) {
      return;
    } else {
      UserRegisterData.getInstance().birthDay = this.state.chosenDate;
      UserRegisterData.getInstance().log();
    }
  }

  render() {
    return (
      <Container>
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.BackAction icon="back" onPress={this._onPressButton1} />
          <Appbar.Content title="Chọn ngày sinh" />
        </Appbar.Header>
        <Content>
          <Text
            style={styles.text}
          >Khi nào là sinh nhật bạn?</Text>
          <DatePicker
            defaultDate={this.state.chosenDate}
            minimumDate={new Date(1960, 1, 1)}
            maximumDate={new Date(2000, 1, 1)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Nhập ngày sinh"
            textStyle={{
              color: "black",
              textAlign: 'center'
            }}
            placeHolderTextStyle={{
              color: "#d3d3d3",
              textAlign: 'center',

            }}
            onDateChange={this.setDate}
            disabled={false}
          />

          <Text
            style={styles.text1}
          >Bạn có thể chọn xem ai được thấy nội dung này trên trang cá nhân của mình.</Text>
          <Text
            style={{
              textAlign: 'center'
            }}>Tại sao tôi cần cung cấp ngày sinh của mình?</Text>
        </Content>
        <Footer
          onClick={this.onSubmit.bind(this)} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  iconHeader: {
    fontSize: 20,
    color: 'black'
  },
  text: {
    color: '#1877F2',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 150,
    textAlign: 'center',
    paddingBottom: 15,
  },
  text1: {
    paddingTop: 15,
    textAlign: 'center',
    color: 'grey',
  }
});


