
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container,Body,Icon,Title,Footer,FooterTab, Header,Button, Content, Text, Right, Left } from 'native-base';

export default class InterfaceLogin extends Component{
    _onPressButton(){
        alert("Đăng ký")
    }
    _onPressButton1(){
      alert("Back")
  }
  _onPressButton2(){
    alert("Đã có tài khoản")
}
    render(){      
  return(
    <Container>
      <Header>
      <Left>
                      <Button transparent>
                      <Icon type="Ionicons" name='md-arrow-back'style={styles.iconHeader} onPress={()=>{}} />
                      </Button>
                    </Left>
                    <Body>
                      <Title>Back</Title>
                    </Body>
                    <Right />
      </Header>
      <Content style={{margin:10}}>
                      <Text 
                    style={styles.text}
                    >Hoàn tất đăng ký</Text>
                  
                    <Text style={styles.text1}
                    >Bằng cách nhấn vào Đăng ký, 
                    bạn đồng ý với <Text 
                    style={{
                        color:'blue'
                    }}>Điều khoản, 
                    chính sách dữ liệu</Text> và <Text 
                    style={{
                        color:'blue'
                    }}>Chính sách cookie </Text>
                    của chúng tôi. Bạn có thể nhận được thông báo 
                    của chúng tôi qua SMS và chọn không nhận bất cứ 
                    lúc nào</Text>
                    <Button style={styles.button} onPress={this._onPressButton} block primary>
                                  <Text>Đăng ký</Text>
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

}}
const styles = StyleSheet.create({
  iconHeader: {
    fontSize:20,
    color:'black'
  },
text1: {
  color:'grey',
  textAlign:'center',
  paddingTop:15,
  paddingBottom:15
},  
button: {
  height:35,
  borderRadius:5
},
  text: {
    color:'blue',
    fontWeight:'bold',
    fontSize:20,
    paddingTop:150,
    textAlign:'center',
    paddingBottom:15,
  },
});


