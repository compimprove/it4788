import React from 'react';
import { Thumbnail, Header, Title, Button, Left, Right, Body, Icon, Text, Container } from 'native-base';
import { TextInput, StyleSheet, View, Text as TextB } from 'react-native';

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      contentFontSize: 25
    }
  }

  setContent(content) {
    this.setState({ content });
  }

  render() {
    return (
      <>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Tạo bài viết</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Đăng</Text>
            </Button>
          </Right>
        </Header>
        <Container style={{ marginTop: 10, marginLeft: 15, marginRight: 15 }}>
          <View style={styles.postHeader}>
            <View style={styles.userImage}>
              <Text>Images</Text>
              <Thumbnail small />
            </View>
            <View style={styles.userInfo}>
              <Text style={{ marginLeft: 5 }}>{this.props.userName}</Text>
              <View style={styles.userInfoBtns}>
                <Button bordered light rounded>
                  <Text>Dark</Text>
                </Button>
                <Button style={{ marginLeft: 5 }} bordered light rounded>
                  <Text>+ Album</Text>
                </Button>
              </View>
            </View>
          </View>
          <View style={{ height: 150 }}>
            <TextInput
              // onContentSizeChange={nativeEvent => {
              //   if (nativeEvent.nativeEvent.contentSize.height > 150) {
              //     let contentFontSize = 10
              //     this.setState({
              //       contentFontSize
              //     })
              //   }
              //   if (nativeEvent.nativeEvent.contentSize.height < 150) {
              //     let contentFontSize = 25;
              //     this.setState({
              //       contentFontSize
              //     })
              //   }
              // }}
              textAlignVertical="top"
              style={{
                height: 150,
                fontSize: this.state.contentFontSize
              }}
              maxFontSizeMultiplier={10}
              allowFontScaling={true}
              multiline={true}
              numberOfLines={10}
              autoFocus={true}
              placeholder="Bạn đang nghĩ gì"
              onChangeText={content => this.setContent(content)}
              defaultValue={this.state.content}
            />
          </View>
        </Container>
      </>
    )
  }
}

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: 'row',
    minHeight: 60
  },
  userImage: {
    flex: 2,
    alignItems: 'center'
  },
  userInfo: {
    flex: 5
  },
  userInfoBtns: {
    marginTop: 5,
    flexDirection: 'row'
  },
  inputContent: {
    height: 150,
    fontSize: 25
  }
})