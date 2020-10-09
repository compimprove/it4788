import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Container, Header, Form, Item, Input, Label, List, ListItem, Thumbnail, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: "Trà Nguyễn",
      friends: 10,
      image: "../Login/image/dog.jpg",
    }
  }
  render() {
    const uri = "data:image/png;base64,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";
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Icon style={styles.iconHeader} type="Ionicons" name='md-arrow-back' onPress={() => { }} />
              <Body>
                <Title>Cỏ đắng</Title>

              </Body>
              <Icon style={styles.iconHeader} type="Feather" name='search' onPress={() => { }} />
            </Button>
          </Left>


        </Header>
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
              <Label><Icon style={styles.icon} type="Feather" name='search' onPress={() => { }} />  Tìm kiếm</Label>
              <Input />
            </Item>
          </Form>
          <Text style={styles.number}>1000 người bạn</Text>
          <List style={{ margin: 10 }}>
            <ListItem avatar style={styles.listAva}>
              <Left>
                <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={() => { }} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> {this.state.friends} bạn chung</Text>
                <Text></Text>
              </Body>
              <Icon type="Entypo" name="dots-three-horizontal" onPress={() => { }}></Icon>
            </ListItem>
            <ListItem avatar style={styles.listAva}>
              <Left>
                <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={() => { }} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> {this.state.friends} bạn chung</Text>
                <Text></Text>
              </Body>
              <Icon type="Entypo" name="dots-three-horizontal" onPress={() => { }}></Icon>
            </ListItem>
            <ListItem avatar style={styles.listAva}>
              <Left>
                <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={() => { }} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> {this.state.friends} bạn chung</Text>
                <Text></Text>
              </Body>
              <Icon type="Entypo" name="dots-three-horizontal" onPress={() => { }}></Icon>
            </ListItem>
            <ListItem avatar style={styles.listAva}>
              <Left>
                <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={() => { }} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> {this.state.friends} bạn chung</Text>
                <Text></Text>
              </Body>
              <Icon type="Entypo" name="dots-three-horizontal" onPress={() => { }}></Icon>
            </ListItem>
            <ListItem avatar style={styles.listAva}>
              <Left>
                <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={() => { }} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> {this.state.friends} bạn chung</Text>
                <Text></Text>
              </Body>
              <Icon type="Entypo" name="dots-three-horizontal" onPress={() => { }}></Icon>
            </ListItem>
            <ListItem avatar style={styles.listAva}>
              <Left>
                <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={() => { }} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> {this.state.friends} bạn chung</Text>
                <Text></Text>
              </Body>
              <Icon type="Entypo" name="dots-three-horizontal" onPress={() => { }}></Icon>
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    marginTop: 20,
    marginLeft: 20
  },
  all: {

  },
  recently: {

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
