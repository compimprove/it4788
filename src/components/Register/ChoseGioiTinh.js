import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container,View,Body,Icon,Title,Footer,FooterTab, Header,Button, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
export default class ChoseGioiTinh extends Component {
  _onPressButton(){
    alert("Tiếp")
}
_onPressButton1(){
  alert("Back")
}
_onPressButton2(){
  alert("Đã có tài khoản")
}
  render() {
    return (
      <Container>
        <Header>
              <Left>
                <Button transparent>
                <Icon type="Ionicons" name='md-arrow-back'style={styles.iconHeader} onPress={()=>{}} />
                </Button>
              </Left>
              <Body>
                <Title>Giới tính</Title>
              </Body>
              <Right />
      </Header>
        <Content style={{margin:10}}>
                  <Text style={styles.text1}>Giới tính của bạn là gì ?</Text>
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
                                  <Radio selected={false} />
                                </Right>
                    </ListItem>
                    
                    <Button style={styles.button} onPress={this._onPressButton} block primary>
                                  <Text>Tiếp</Text>
                    </Button>
        </Content>
        <Footer>
                <FooterTab>
                  <Button full>
                    <Text onPress={this._onPressButton2}>Bạn đã có tài khoản?</Text>
                  </Button>
                </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  iconHeader: {
    fontSize:20,
    color:'black'
  },
  button: {
   marginTop:10,
   borderRadius:5
  },
  text1: {
    color:'blue',
    fontWeight:'bold',
    fontSize:20,
    paddingTop:50,
    textAlign:'center',
    paddingBottom:15,
  },
 });