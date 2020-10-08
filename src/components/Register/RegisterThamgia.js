
import React, {Component} from 'react';
import { StyleSheet, Image,} from 'react-native';
import {Header,Left,Button,Text,Content,Icon,Body,Container,Footer, FooterTab,Title,Right} from 'native-base';
export default class RegisterThamgia extends Component{
    _onPressButton1(){
        alert("Bắt đầu");
    }
    _onPressButton2(){
      alert("Bạn đã có tài khoản");
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
                                    <Title>Tạo tài khoản</Title>
                                  </Body>
                                  <Right />
                    </Header>
                    <Content style={{margin:10,}}>
                                <Image 
                                style={styles.image}
                                source={require('../Login/image/face.jpg')} />  
                                <Text style={styles.tham_gia}> Tham gia Facebook</Text>
                              <Text  
                                style={styles.text}>
                                Chúng tôi giúp bạn tạo tài khoản sau vài bước dễ dàng
                              </Text>
                              <Button onPress={this._onPressButton1} block primary>
                                    <Text>Bắt đầu</Text>
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
  image: {
    maxHeight:200,
    width:'100%',
    marginBottom:20,
    borderRadius:5
  },
  tham_gia: {
    color:'blue',
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
  },
  text: {
        textAlign:'center',
        color:'grey',
        paddingTop:10,
        paddingBottom:20
  },
  iconHeader: {
    fontSize:20,
    color:'black'
  },
});


