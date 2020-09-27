import React, { Component } from 'react';
import {
  Button,
} from 'react-native';
import { Container,View, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
export default class ChoseGioiTinh extends Component {
  _onPressButton(){
    alert("Tiếp")
}

  render() {
    return (
      <Container>
        <Header />
        <Content style={{margin:10}}>
        <Text style={{
          color:'blue',
          fontWeight:'bold',
          fontSize:20,
          paddingTop:150,
          textAlign:'center',
          paddingBottom:15,
        }}>Giới tính của bạn là gì ?</Text>
        <Text style={{
          textAlign:'center'
        }}>Về sau, bạn có thể thay đổi những ai nhìn 
        thấy giới tính của mình trên trang cá nhân</Text>
          <ListItem>
            <Left>
              <Text style={{color:'blue'}}>Nữ</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={{color:'blue'}}>Nam</Text>
            </Left>
            <Right>
              <Radio 
              selected={true}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <View>
              <Text style={{color:'blue'}}>Tùy chỉnh</Text>
              <Text>Chọn Tùy chỉnh nếu bạn thuộc giới tính khác hoặc không muốn tiết lộ</Text>
        </View>
            </Left>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>
          
        </Content>
        <Button
              style={{
                backgroundColor:'lightblue',
                flexDirection: 'row',
                justifyContent: 'space-between',
                textAlign:'center',
                color:'white',
              }}
              onPress={this._onPressButton}
              title="Tiếp"
              />
      </Container>
    );
  }
}
