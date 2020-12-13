import React, {PureComponent} from 'react';
import ViewMoreText from 'react-native-view-more-text';
import {Appbar, Divider, Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {StyleSheet, TouchableHighlight, View, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Utility from "../../../Utility";
import {timeToString} from "../Helper";

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

  addComment(text) {
    this.props.addComment(this.props.data.id, text);
  }

  render() {
    let articleData = this.props.data;
    let userName = this.props.userName;
    let dateTime = new Date(articleData.timePosted);
    let addComment = this.addComment.bind(this);
    return (
        <Card>
          <TouchableOpacity onPress={this.navigateToUserPage.bind(this)}>
            <Card.Title title={userName} subtitle={timeToString(dateTime)}
                        left={(props) => <Avatar.Image size={50} source={{uri: articleData.user_image_url}}/>}/>
          </TouchableOpacity>
          <Card.Content>
            <ViewMoreText numberOfLines={this.NUMBER_OF_LINE}>
              <Paragraph selectable>{Utility.createContent(articleData.content)}</Paragraph>
            </ViewMoreText>
          </Card.Content>
          <TouchableOpacity onPress={() => {
            this.navigate("MainPost", {
              data: this.props.data
            })
          }}>
            <Card.Cover source={{uri: articleData.image_url}}/>
          </TouchableOpacity>
          <Card.Actions style={styles.justifySpaceBetween}>
            <Text>
              <Button icon="thumb-up" color="#1877F2">{articleData.likes}</Button>
            </Text>
            <Text>{(articleData.comments ? articleData.comments.length : 0).toString() + ' Comments'} </Text>
          </Card.Actions>
          <View style={styles.postSeparator}></View>
          <Card.Actions style={styles.justifySpaceBetween}>
            <TouchableHighlight underlayColor="#dddddd" onPress={() => {
            }}>
              <Button uppercase={false} icon="thumb-up-outline" color="#444444">Like</Button>
            </TouchableHighlight>
            {this.props.hasCommentBtn && <TouchableHighlight underlayColor="#dddddd" onPress={() => {
              this.navigate("Comment", {
                data: articleData.comments,
                addComment: addComment,
                userName: userName
              })
            }}>
              <Button uppercase={false} icon="comment-outline" color="#444444">Comment</Button>
            </TouchableHighlight>}
            <TouchableHighlight underlayColor="#dddddd" onPress={() => {
            }}>
              <Button uppercase={false} icon="share-outline" color="#444444">Share</Button>
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
