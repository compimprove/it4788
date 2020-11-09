import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Appbar } from 'react-native-paper';
import { Container, Form, Item, Input, Label, List, ListItem, Content, Button, Left, Body, Icon, Text } from 'native-base';
import Pop from '../Popup/Pop';
import AppHeaderBar from '../MainPage/AppHeaderBar';

export default class UserFriends extends Component {
  _onPressButton1() {
    alert("Back")
  }
  _onPressButton2() {
    alert("Tìm kiếm")
  }
  _onPressButton3() {
    alert("Trang cá nhân bạn bè")
  }
  _onPressButton4() {
    alert("Một số thông tin cơ bản của bạn bè")
  }
  constructor(props) {
    super(props);
    this.state = {
      searchText: null
    }
  }
  onSearch(value) {
    this.setState({ searchText: value });
  }
  render() {
    let userData, userFriends
    userData = this.props.route.params.userData;
    userFriends = userData.friends;
    if (this.state.searchText) {
      userFriends = userData.friends.filter(friend => {
        return friend.userName.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1;
      })
    }
    return (
      <Container>
        <AppHeaderBar navigation={this.props.navigation} />
        <Content>
          <Text style={styles.button}>
            <Button onPress={() => { }} rounded style={styles.all}>
              <Text>Tất cả</Text>
            </Button>
            <Button onPress={() => { }} rounded light style={styles.recently}>
              <Text>Gần đây</Text>
            </Button>
          </Text>
          <Form>
            <Item floatingLabel style={styles.search}>
              <Label><Icon style={styles.icon} type="Feather" name='search' onPress={() => { }} />Tìm kiếm</Label>
              <Input onChangeText={value => { this.onSearch(value) }} />
            </Item>
          </Form>
          <Text style={styles.number}>{userData.friend} người bạn</Text>
          <List style={{ margin: 10 }}>
            {userFriends.map(userData => (
              <FriendList key={userData.id} friendData={userData} />
            ))}
          </List>
        </Content>

      </Container>
    );
  }
}

function FriendList({ friendData }) {
  return (
    <ListItem avatar style={styles.listAva}>
      <Left>
        <Avatar.Image size={70} source={{ uri: friendData.image_url }} />
      </Left>
      <Body>
        <Text>{friendData.userName}</Text>
        <Text note>10 bạn chung</Text>
        <Text></Text>
      </Body>
      <Pop />
    </ListItem>
  )
}

const styles = StyleSheet.create({

  listAva: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    marginTop: 20,
    marginLeft: 20
  },
  all: {

  },

  icon: {
    fontSize: 20,
    color: 'grey'
  },
  number: {
    fontWeight: 'bold',
    paddingTop: 20,
    marginLeft: 10
  },
  search: {
    margin: 20
  },
  iconHeader: {
    fontSize: 20,
    color: 'black'
  }
});
