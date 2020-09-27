import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text } from 'native-base';
export default class ChoseDate extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
        <Text 
        style={{
                color:'blue',
                fontWeight:'bold',
                fontSize:20,
                paddingTop:150,
                textAlign:'center',
                paddingBottom:15,
        }}
        >Khi nào là sinh nhật bạn?</Text>
          <DatePicker 
            defaultDate={new Date(2020, 9, 9)}
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
                textAlign:'center'
            }}
            placeHolderTextStyle={{ 
                color: "#d3d3d3",
                textAlign:'center',
                
            }}
            onDateChange={this.setDate}
            disabled={false}
            />
            
            <Text 
            style={{
                paddingTop:15,
                textAlign:'center',
                color:'grey',
            }}
            >Bạn có thể chọn xem ai được thấy nội dung này trên trang cá nhân của mình.</Text>
            <Text 
            style={{
                textAlign:'center'
            }}>Tại sao tôi cần cung cấp ngày sinh của mình?</Text>
            <Text 
            style={{
                textAlign:'center',
                paddingTop:10,
                color:'blue',
                fontWeight:'bold'
            }}
            >Bạn đã có tài khoản?</Text>
        
        </Content>
      </Container>
    );
  }
}