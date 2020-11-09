
import React from 'react';
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { StyleSheet, Image, View, Text, ScrollView, TextInput } from 'react-native';
import { timeToString } from '../Helper';

class CommentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return (
      <View style={styles.comment}>
        <Avatar.Image size={50} source={{ uri: this.props.data.image_url }} />
        <View style={styles.commentBody}>
          <View style={styles.commentBackground}>
            <Text style={styles.userName}>{this.props.data.userName}</Text>
            <Text style={styles.commentContent}>{this.props.data.content}</Text>
          </View>
          <Text style={styles.timeComment}>{timeToString(this.props.data.timePosted)}</Text>
        </View>
      </View>
    );
  }
}

export default CommentComponent;

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
    marginRight: 10,
    marginLeft: 10,
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