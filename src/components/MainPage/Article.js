import React, { PureComponent } from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
const userSample = require("./user_sample.json");

class Article extends React.Component {
  NUMBER_OF_LINE = 10;

  constructor(props) {
    super(props);
  }

  navigate(route, data) {
    setTimeout(() => {
      this.props.navigation.navigate(route, data)
    }, 200);
  }

  navigateToUserPage() {
    this.navigate("InterfaceUser", {
      user: userSample
    })
  }

  render() {
    let articleData = this.props.data;
    return (
      <Card>
        <TouchableOpacity onPress={this.navigateToUserPage.bind(this)}>
          <Card.Title title={articleData.userName} subtitle={articleData.timePosted / 60 + 'm'} left={(props) => <Avatar.Image size={50} source={{ uri: articleData.user_image_url }} />} />
        </TouchableOpacity>
        <Card.Content>
          <ViewMoreText numberOfLines={this.NUMBER_OF_LINE}>
            <Paragraph selectable>{articleData.content}</Paragraph>
          </ViewMoreText>
        </Card.Content>
        <TouchableOpacity onPress={() => {
          this.navigate("MainPost", {
            data: this.props.data
          })
        }}>
          <Card.Cover source={{ uri: articleData.image_url }} />
        </TouchableOpacity>
        <Card.Actions style={styles.justifySpaceBetween}>
          <Text>
            <Button icon="thumb-up" color="#1877F2">{articleData.likes}</Button>
          </Text>
          <Text>{articleData.comment + ' Comments'} </Text>
        </Card.Actions>
        <View style={styles.postSeparator}></View>
        <Card.Actions style={styles.justifySpaceBetween}>
          <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
            <Button uppercase={false} icon="thumb-up-outline" color="#444444">Like</Button>
          </TouchableHighlight>
          {this.props.hasCommentBtn && <TouchableHighlight underlayColor="#dddddd" onPress={() => {
            this.navigate("Comment", {
              data: articleData.comments
            })
          }}>
            <Button uppercase={false} icon="comment-outline" color="#444444" >Comment</Button>
          </TouchableHighlight>}
          <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
            <Button uppercase={false} icon="share-outline" color="#444444" >Share</Button>
          </TouchableHighlight>
        </Card.Actions>
      </Card>

    );
  }
}

export default Article;


const styles = StyleSheet.create({
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  postSeparator: {
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 0.5,
    elevation: 0,
  }
});
