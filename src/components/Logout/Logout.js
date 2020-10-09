import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Alert
} from 'react-native';
import { List } from 'react-native-paper';
import FooterLog from './FooterLog';
import { Container, Header, Item, Icon, Body, Title, Content, Button, Text, Card, CardItem } from 'native-base';

export default class Logout extends Component {
  _onPressButton1() {
    Alert.alert("Home")
  }
  _onPressButton2() {
    Alert.alert("Bạn bè")
  }
  _onPressButton3() {
    Alert.alert("Nhóm")
  }
  _onPressButton4() {
    Alert.alert("Video")
  }
  _onPressButton5() {
    Alert.alert("Thông báo")
  }
  _onPressButton6() {
    Alert.alert("Menu")
  }
  _onPressButton7() {
    Alert.alert("Nhóm")
  }
  _onPressButton8() {
    Alert.alert("Video trên Watch")
  }
  _onPressButton9() {
    Alert.alert("Maketplace")
  }
  _onPressButton10() {
    Alert.alert("Đã lưu")
  }
  _onPressButton11() {
    Alert.alert("Kỷ niệm")
  }
  _onPressButton12() {
    Alert.alert("Hẹn hò")
  }
  _onPressButton13() {
    Alert.alert("Trang")
  }

  _onPressButton14() {
    Alert.alert("Sự kiện")
  }
  _onPressButton15() {
    Alert.alert("Bạn bè quanh đây")
  }
  _onPressButton16() {
    Alert.alert("Việc làm")
  }
  _onPressButton17() {
    Alert.alert("Việc làm")
  }
  _onPressButton18() {
    Alert.alert("Việc làm")
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#F0F2F5' }}>
        <Header style={{ backgroundColor: 'white' }}>

          <Body>
            <Title>
              <Button transparent>
                <Icon onPress={this._onPressButton1} type="Entypo" style={{ marginRight: '5%', color: 'black' }} name='home' />
              </Button>
              <Button transparent>
                <Icon onPress={this._onPressButton3} type="MaterialCommunityIcons" style={{ marginRight: '5%', color: 'black' }} name='television-play' />
              </Button>
              <Button transparent>
                <Icon onPress={this._onPressButton2} type="FontAwesome" style={{ marginRight: '5%', color: 'black' }} name='users' />
              </Button>
              <Button transparent>
                <Icon onPress={this._onPressButton4} type="FontAwesome" style={{ marginRight: '5%', color: 'black' }} name='heart-o' />
              </Button>
              <Button transparent>
                <Icon onPress={this._onPressButton5} type="SimpleLineIcons" style={{ marginRight: '5%', color: 'black' }} name='bell' />
              </Button>
              <Button transparent>
                <Icon onPress={this._onPressButton6} style={{ color: 'black' }} name='menu' />
              </Button>
            </Title>
          </Body>


        </Header>
        <Content style={{ margin: 10 }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',

          }}>
            <Card style={{ width: '47%', borderRadius: 5 }}>
              <CardItem>
                <Body>
                  <Icon style={styles.icon1} style={{ color: '#1B84F5' }} type="FontAwesome5" name="user-friends" />
                  <Text style={{ marginLeft: 10 }} >Bạn bè</Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={{ width: '47%', borderRadius: 5 }}>
              <CardItem>
                <Body>
                  <Icon style={styles.icon1} style={{ color: '#23ABFD' }} type="FontAwesome" name="group" />
                  <Text style={{ marginLeft: 10 }}>Nhóm</Text>

                </Body>
              </CardItem>
            </Card>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',

          }}>
            <Card style={{ width: '47%', borderRadius: 5 }}>
              <CardItem>
                <Body>
                  <Icon style={styles.icon1} style={{ color: '#2089E8' }} name="ondemand-video" type="MaterialIcons" />
                  <Text style={{ marginLeft: 10 }}>Video trên Watch</Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={{ width: '47%', borderRadius: 5 }}>
              <CardItem>
                <Body>
                  <Icon style={styles.icon1} style={{ color: '#2089E8' }} type="Entypo" name="back-in-time" />
                  <Text style={{ marginLeft: 10 }}>Marketplace</Text>

                </Body>
              </CardItem>
            </Card>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',

          }}>
            <Card style={{ width: '47%', borderRadius: 5 }}>
              <CardItem>
                <Body>
                  <Icon style={styles.icon1} style={{ color: '#793DE4' }} type="Ionicons" name="md-bookmark" />
                  <Text style={{ marginLeft: 10 }}>Đã lưu</Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={{ width: '47%', borderRadius: 5 }}>
              <CardItem>
                <Body>
                  <Icon style={styles.icon1} style={{ color: '#E8512A' }} type="MaterialCommunityIcons" name="flag" />
                  <Text style={{ marginLeft: 10 }}>Trang</Text>

                </Body>
              </CardItem>
            </Card>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',

          }}>
            <Card style={{ width: '47%', borderRadius: 5 }}>
              <CardItem>
                <Body>
                  <Icon style={styles.icon1} style={{ color: '#F2506C' }} type="MaterialIcons" name="event" />
                  <Text style={{ marginLeft: 10 }}>Sự kiện</Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={{ width: '47%', borderRadius: 5 }}>
              <CardItem>
                <Body>
                  <Icon style={styles.icon1} style={{ color: 'rgb(84,198,252)' }} type="Entypo" name="game-controller" />
                  <Text style={{ marginLeft: 10 }}>Chơi game</Text>

                </Body>
              </CardItem>
            </Card>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',

          }}>
            <Card style={{ width: '47%', borderRadius: 5 }}>
              <CardItem>
                <Body>
                  <Icon style={styles.icon1} style={{ color: '#EA8C2F' }} type="Entypo" name="briefcase" />
                  <Text style={{ marginLeft: 10 }}>Việc làm</Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={{ width: '47%', borderRadius: 5 }}>
              <CardItem>
                <Body>
                  <Icon style={styles.icon1} style={{ color: '#C9DCE6' }} type="MaterialCommunityIcons" name="weather-partly-cloudy" />
                  <Text style={{ marginLeft: 10 }}>Thời tiết</Text>

                </Body>
              </CardItem>
            </Card>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',

          }}>
            <Card style={{ width: '47%', borderRadius: 5 }}>
              <CardItem>
                <Body>
                  <Icon style={styles.icon1} style={{ color: '#F34E6B' }} type="MaterialCommunityIcons" name="heart-circle" />
                  <Text style={{ marginLeft: 10 }}>Gây quỹ</Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={{ width: '47%', borderRadius: 5 }}>
              <CardItem>
                <Body>
                  <Icon style={styles.icon1} style={{ color: '#23ABFD' }} type="FontAwesome" name="user-circle-o" />
                  <Text style={{ marginLeft: 10 }}>Bạn bè quanh đây</Text>

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

  view1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10

  },
  view2: {
    width: '48%',
    height: 75,
    borderWidth: 0.5,
    borderRadius: 7
  },
  view3: {
    width: '48%',
    height: 170,
    borderWidth: 0.5,
    borderRadius: 7
  },
  icon1: {
    marginLeft: 10,
    marginTop: 10
  }
});