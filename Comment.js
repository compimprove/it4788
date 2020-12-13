import React, { useState } from "react";
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Text, ScrollView, TextInput } from 'react-native';
import CommentComponent from "./src/components/MainPage/CommentComponent";
import Utility from "./Utility";

const MyTextInput = ({callBack}) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      style={styles.myTextInput}
      placeholder="Write a comment..."
      value={text}
      onChangeText={text => {
        setText(Utility.createContent(text))
      }}
      onEndEditing={() => {
        setText("");
        callBack(text)
      }}
    />
  );
};

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.getToken = this.props.route.params.getToken;
    this.state = {
      comments: this.props.route.params.data
    };
    this.updateCommentInterval = setInterval(function () {
      this.setState({
        comments: this.props.route.params.data,
      })
    }.bind(this),500)
  }

  componentWillUnmount() {
    clearInterval(this.updateCommentInterval);
  }

  addComment(text) {
    this.props.route.params.addComment(text);
    // this.state.comments.push({
    //   userName: this.props.route.params.userName,
    //   content: text,
    //   id: this.state.comments.length
    // })
    // this.setState({});
  }

  render() {
    let comments = this.state.comments;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {
          setTimeout(() => {
            this.props.navigation.goBack()
          }, 200);
        }} style={styles.appbar}>
          <Card.Actions style={styles.justifySpaceBetween}>
            <Text>
              <Button icon="thumb-up" color='#1877F2'>2</Button>
            </Text>
          </Card.Actions>
        </TouchableHighlight>
        <View style={styles.separator} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {(comments.length > 10) &&
              <Button style={{ marginTop: 10, alignSelf: 'flex-start' }} mode="text" color="#000000" uppercase={false} onPress={() => console.log('Pressed')}>
                Xem các bình luận trước...
              </Button>
            }
            {comments.map(data => <CommentComponent key={data.id} data={data} />)}
          </View>
        </ScrollView>
        <View style={styles.separator}></View>
        <View>
          <MyTextInput
          callBack={this.addComment.bind(this)} />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: "#ffffff",
  },

  appbarTitle: {
    fontSize: 24,
  },
  appbarHead: {
    elevation: 0,
    backgroundColor: '#ffffff',
    height: 70,
    left: 0,
    right: 0,
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },

  separator: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.5,
    elevation: 0,
  },
  postSeparator: {
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 0.5,
    elevation: 0,
  },
  dividerPost: {
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 10,
    elevation: 0,
  },
  userName: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  comment: {
    marginTop: 20,
    flexDirection: 'row',
    flexShrink: 1
  },
  commentContent: {
    marginLeft: 10,
    flexShrink: 1
  },
  commentBody: {
    marginHorizontal: 10,
    flex: 1,
  },
  commentBackground: {
    padding: 10,
    backgroundColor: '#F0F2F5',
    borderRadius: 20,
    alignSelf: 'baseline'
  },
  avatarComment: {
    marginLeft: 10,
  },
  timeComment: {
    marginLeft: 10,
  },
  myTextInput: {
    paddingLeft: 15,
    fontSize: 16,
    height: 45,
    margin: 10,
    backgroundColor: '#F0F2F5',
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
