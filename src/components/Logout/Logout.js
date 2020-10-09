import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native';
import { Appbar} from 'react-native-paper';
import FooterLog from './FooterLog';
import { Container, Header,Icon,Body, Content, Text,Card,CardItem } from 'native-base';

export default class Logout extends Component {
  _onPressButton1(){
    alert("Home")
}
_onPressButton2(){
  alert("Bạn bè")
}
_onPressButton3(){
  alert("Nhóm")
}
_onPressButton4(){
  alert("Video")
}
_onPressButton5(){
  alert("Thông báo")
}
_onPressButton6(){
  alert("Menu")
}
_onPressButton7(){
  alert("Nhóm")
}
_onPressButton8(){
  alert("Video trên Watch")
}
_onPressButton9(){
  alert("Maketplace")
}
_onPressButton10(){
  alert("Đã lưu")
}
_onPressButton11(){
  alert("Kỷ niệm")
}
_onPressButton12(){
  alert("Hẹn hò")
}
_onPressButton13(){
  alert("Trang")
}

_onPressButton14(){
  alert("Sự kiện")
}
_onPressButton15(){
  alert("Bạn bè quanh đây")
}
_onPressButton16(){
  alert("Việc làm")
}
_onPressButton17(){
  alert("Việc làm")
}
_onPressButton18(){
  alert("Việc làm")
}
    render() {
    return (
      <Container style={{backgroundColor:'#F0F2F5'}}>
        <Header style={{ backgroundColor:'white'}}>
        <Appbar style={styles.appbarBelow}>
        <Appbar.Action icon="home" size={29} onPress={this._onPressButton1}/>
        <Appbar.Action icon="youtube-tv" size={29} onPress={this._onPressButton2}/>
        <Appbar.Action icon="account-multiple" size={29} onPress={this._onPressButton3}/>
        <Appbar.Action icon="account-group" size={29} onPress={this._onPressButton4}/>
        <Appbar.Action icon="bell-outline" size={29} onPress={this._onPressButton5}/>
        <Appbar.Action icon="menu" size={29} onPress={this._onPressButton6}/>
        </Appbar>
        </Header>
        <Content style={{margin:10}}>
          <View style={styles.box}>
        <Card style={{width:'47%',borderRadius:5}} >
            <CardItem >
              <Body >
                         <Icon onPress={this._onPressButton9} style={{color: '#1B84F5'}} type="FontAwesome5" name="user-friends"/>
                         <Text style={{marginLeft:10}} >Bạn bè</Text>   
              </Body>
            </CardItem>
            </Card>
            <Card style={{width:'47%',borderRadius:5}}>
            <CardItem>
              <Body>
              <Icon onPress={this._onPressButton10}  style={{color: '#23ABFD'}} type="FontAwesome" name="group"/>
              <Text style={{marginLeft:10}}>Nhóm</Text>
                
              </Body>
            </CardItem>
            </Card>
            </View>
            <View style={styles.box}>
        <Card style={{width:'47%',borderRadius:5}}>
            <CardItem >
              <Body>
              <Icon onPress={this._onPressButton7}  style={{color: '#2089E8'}} name="ondemand-video" type="MaterialIcons" />
             <Text style={{marginLeft:10}}>Video trên Watch</Text>
              </Body>
            </CardItem>
            </Card>
            <Card style={{width:'47%',borderRadius:5}} >
            <CardItem>
              <Body>
              <Icon onPress={this._onPressButton8}  style={{color: '#2089E8'}} type="Entypo" name="back-in-time"/>
            <Text style={{marginLeft:10}}>Marketplace</Text>
                
              </Body>
            </CardItem>
            </Card>
            </View>
            <View style={styles.box}>
        <Card style={{width:'47%',borderRadius:5}} >
            <CardItem>
              <Body>
              <Icon onPress={this._onPressButton11} style={{color: '#793DE4'}} type="Ionicons" name="md-bookmark"/>
            <Text style={{marginLeft:10}}>Đã lưu</Text>
              </Body>
            </CardItem>
            </Card>
            <Card style={{width:'47%',borderRadius:5}}>
            <CardItem>
              <Body>
              <Icon  onPress={this._onPressButton12} style={{color: '#E8512A'}} type="MaterialCommunityIcons" name="flag"/>
            <Text style={{marginLeft:10}}>Trang</Text>
                
              </Body>
            </CardItem>
            </Card>
            </View>
            <View style={styles.box}>
        <Card style={{width:'47%',borderRadius:5}} >
            <CardItem>
              <Body>
              <Icon onPress={this._onPressButton13}  style={{color: '#F2506C'}} type="MaterialIcons" name="event"/>
            <Text style={{marginLeft:10}}>Sự kiện</Text>
              </Body>
            </CardItem>
            </Card>
            <Card style={{width:'47%',borderRadius:5}} >
            <CardItem>
              <Body>
              <Icon onPress={this._onPressButton14}  style={{color: 'rgb(84,198,252)'}} type="Entypo" name="game-controller"/>
            <Text style={{marginLeft:10}}>Chơi game</Text>
                
              </Body>
            </CardItem>
            </Card>
            </View>
            <View style={styles.box}>
        <Card style={{width:'47%',borderRadius:5}}>
            <CardItem>
              <Body>
              <Icon onPress={this._onPressButton15} style={styles.icon1} style={{color: '#EA8C2F'}} type="Entypo" name="briefcase"/>
            <Text style={{marginLeft:10}}>Việc làm</Text>
              </Body>
            </CardItem>
            </Card>
            <Card style={{width:'47%',borderRadius:5}} >
            <CardItem>
              <Body>
              <Icon onPress={this._onPressButton16}  style={{color: '#C9DCE6'}} type="MaterialCommunityIcons" name="weather-partly-cloudy"/>
            <Text style={{marginLeft:10}}>Thời tiết</Text>
                
              </Body>
            </CardItem>
            </Card>
            </View>
            <View style={styles.box}>
        <Card style={{width:'47%',borderRadius:5}}>
            <CardItem>
              <Body>
              <Icon  onPress={this._onPressButton17}  style={{color: '#F34E6B'}} type="MaterialCommunityIcons" name="heart-circle"/>
            <Text style={{marginLeft:10}}>Gây quỹ</Text>
              </Body>
            </CardItem>
            </Card>
            <Card style={{width:'47%',borderRadius:5}}>
            <CardItem>
              <Body>
              <Icon  onPress={this._onPressButton18}style={{color: '#23ABFD'}} type="FontAwesome" name="user-circle-o"/>
            <Text style={{marginLeft:10}}>Bạn bè quanh đây</Text>
                
              </Body>
            </CardItem>
            </Card>
            </View>
</Content>
<FooterLog />
        
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  box: {
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
  },
 view1: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin:10
 
 },
  view2: {
    width:'48%',
    height:75,
    borderWidth:0.5,
    borderRadius:7
  },
  view3: {
    width:'48%',
    height:170,
    borderWidth:0.5,
    borderRadius:7
  },
  
  appbarBelow:{
    elevation: 0,
    backgroundColor: '#ffffff',
    marginTop:'0.7%',
    left: 0,
    right: 0,
    justifyContent: 'space-between',
  
  }
});