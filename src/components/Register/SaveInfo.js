
import React, {Component} from 'react';
import { Avatar } from 'react-native-paper';
import {StyleSheet} from 'react-native';
import { Container, Header,Left,Icon,Title,Right,Body,Item,Thumbnail, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class SaveInfo extends Component {
    _onPressButton(){
        alert("OK")
    }
    _onPressButton1(){
        alert("Lúc khác")
    }
    render(){ 
      const uri = "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png";  
       return (
      <Container>
        <Header>
                  <Left>
                      <Button transparent>
                      <Icon type="Ionicons" name='md-arrow-back'style={styles.iconHeader} onPress={()=>{}} />
                      </Button>
                    </Left>
                    <Body>
                      <Title>Lưu thông tin</Title>
                    </Body>
                    <Right />
      </Header>
        <Content style={{margin:10,
                         paddingTop:'40%',}}>
        <Thumbnail
        style={{
         marginLeft:'45%'
        }}
        source={{uri: uri}} />  
        <Item style={{paddingTop:20,paddingBottom:20}}>
                 <Avatar.Image size={100} source={require('../Login/image/dog.jpg')} /> 
                  <Text style={{marginLeft:10,fontWeight:'bold'}}>Cỏ đắng</Text>
                  
        </Item>
        </Content>
        <Footer>
          <FooterTab>
          <Button onPress={this._onPressButton1}>
              <Text>Lúc khác</Text>
            </Button>
            <Button onPress={this._onPressButton}>
              <Text>Lưu</Text>
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
  }

});



