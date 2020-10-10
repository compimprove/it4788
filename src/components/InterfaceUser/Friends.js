import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Avatar,Appbar} from 'react-native-paper';
import { Container, Header,Form,Item,Input, Label,List,ListItem, Thumbnail, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Setting extends Component {
  _onPressButton1(){
    alert("Back")
  }
  _onPressButton2(){
    alert("Tìm kiếm")
  }
  _onPressButton3(){
    alert("Trang cá nhân bạn bè")
  }
  _onPressButton4(){
    alert("Một số thông tin cơ bản của bạn bè")
  }
 constructor(props){
   super(props);
   this.state={
     id:1,
     name:"Trà Nguyễn",
     friends:10,
     image: "../Login/image/dog.jpg",
   }
 }
  render() {
       return (
      <Container>
         <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction icon="back" onPress={this._onPressButton1} />
      <Appbar.Content title="Cỏ đắng" />
      <Appbar.Action icon="magnify" onPress={this._onPressButton2} />
    </Appbar.Header>
        
        <Content>
            <Text style={styles.button}>
        <Button onPress={() => {}} rounded style={styles.all}>
            <Text>Tất cả</Text>
          </Button>
       
          <Button onPress={() => {}} rounded light style={styles.recently}>
            <Text>Gần đây</Text>
          </Button>
          </Text>
        <Form>
            <Item floatingLabel style={styles.search}>
              <Label><Icon style={styles.icon} type="Feather" name='search' onPress={()=>{}}/>  Tìm kiếm</Label>
              <Input />
            </Item>
          </Form>
            <Text style={styles.number}>1000 người bạn</Text>
        <List style={{margin:10}}>
            <ListItem avatar style={styles.listAva}>
              <Left>
              <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={this._onPressButton3} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> {this.state.friends} bạn chung</Text>
                <Text></Text>
              </Body>
              <Icon type="Entypo" name="dots-three-horizontal"  onPress={this._onPressButton4}></Icon>
            </ListItem>
            <ListItem avatar style={styles.listAva}>
              <Left>
              <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={() => {}} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> {this.state.friends} bạn chung</Text>
                <Text></Text>
              </Body>
              <Icon type="Entypo" name="dots-three-horizontal" onPress={()=>{}}></Icon>
            </ListItem>
            <ListItem avatar style={styles.listAva}>
              <Left>
              <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={() => {}} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> {this.state.friends} bạn chung</Text>
                <Text></Text>
              </Body>
             <Icon type="Entypo" name="dots-three-horizontal" onPress={()=>{}}></Icon>
            </ListItem>
            <ListItem avatar style={styles.listAva}>
              <Left>
              <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={() => {}} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> {this.state.friends} bạn chung</Text>
                <Text></Text>
              </Body>
              <Icon type="Entypo" name="dots-three-horizontal"  onPress={()=>{}}></Icon>
            </ListItem>
            <ListItem avatar style={styles.listAva}>
              <Left>
              <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={() => {}} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> {this.state.friends} bạn chung</Text>
                <Text></Text>
              </Body>
              <Icon type="Entypo" name="dots-three-horizontal" onPress={()=>{}}></Icon>
            </ListItem>
            <ListItem avatar style={styles.listAva}>
              <Left>
              <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={() => {}} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> {this.state.friends} bạn chung</Text>
                <Text></Text>
              </Body>
             <Icon type="Entypo" name="dots-three-horizontal" onPress={()=>{}}></Icon>
            </ListItem>
            
          </List>
        </Content>
        <Footer>
          <FooterTab>
            
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  listAva: {
  flexDirection:'row',
  alignItems:'center'
  },
    button: {
        marginTop:20,
        marginLeft:20
    },
    all: {
        
    },
    recently: {
       
    },
    icon: {
        fontSize:20,
        color:'grey'
    },
number: {
    fontWeight:'bold',
    paddingTop:20,
    marginLeft:10
},
search: {
    margin:20
},
iconHeader: {
  fontSize:20,
  color:'black'
}
});
