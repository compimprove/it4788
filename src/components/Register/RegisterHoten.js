
import React, {Component} from 'react';
import {StyleSheet, View,TextInput,} from 'react-native';
import {Header,Left,Button,Text,Content,Icon,Body,Container,Footer, FooterTab,Title,Right} from 'native-base';
export default class RegisterHoten extends Component{  
  _onPressButton2(){
    alert("Bạn đã có tài khoản");
}
_onPressButton1(){
  alert("Back");
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
                <Title>Tham gia</Title>
              </Body>
              <Right />
      </Header>
      <Content style={{margin:10,}}>
              <Text style={styles.name}>Bạn tên gì?</Text>
              <View 
              style={styles.view}>
              <TextInput 
              style={styles.input1}
              placeholder="Họ"
              /> 
              <TextInput style={styles.input2}
              placeholder="Tên"/>
              </View>
              <Text style={styles.text}>
                  Dùng tên thật giúp bạn bè dễ dàng nhận ra bạn hơn</Text>
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
  text: {
           textAlign:'center',
            color:'grey'
  },
  view: {
            flex: 1, 
            flexDirection: 'row', 
            justifyContent: 'space-around',
            paddingTop:15,
            paddingBottom:15,
            color:'grey',
  },
  input1: {
            borderColor:'grey',
            borderWidth:1,
            width:150,
            borderRadius:5,
            height:40
  },
  input2: {
            borderColor:'grey',
            borderWidth:1,
            width:150,  
            borderRadius:5 ,
            height:40
  },
  name: {
            color:'blue',
            fontWeight:'bold',
            fontSize:20,
            paddingTop:200,
            textAlign:'center'
  },

});


