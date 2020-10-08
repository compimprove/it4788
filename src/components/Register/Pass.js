
import React, {Component} from 'react';
import {StyleSheet,TextInput} from 'react-native';
import { Container,Body,Icon,Title,Footer,FooterTab, Header,Button, Content, Text, Right, Left } from 'native-base';
export default class Pass extends Component{
    _onPressButton(){
        alert("Tiếp")
    }
    _onPressButton2(){
      alert("Bạn đã có tài khoản")
  }
  _onPressButton1(){
    alert("Back")
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
                      <Title>Mật khẩu</Title>
                    </Body>
                    <Right />
              </Header>
              <Content style={{margin:10}}>
                            <Text 
                          style={styles.text}
                          >Tạo mật khẩu ?</Text>
                          <TextInput 
                          style={styles.input}
                          placeholder="Mật khẩu"
                          />
                          <Text style={styles.text1}
                          >Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số, chữ cái và dấu chấm câu (như! và &)</Text>
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
input: {
  borderWidth:1,
  borderColor:'grey',
  borderRadius:5 ,
  height:40
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


