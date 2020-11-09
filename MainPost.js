import * as React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Text, ScrollView, TextInput } from 'react-native';
import Article from './src/components/MainPage/Article';
import CommentComponent from './src/components/MainPage/CommentComponent';

const MyTextInput = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      style={styles.myTextInput}
      placeholder="Write a comment..."
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default class MainPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.route.params.data
    return (
      <View style={styles.container}>
        <View style={styles.appbar}>
          <Appbar style={styles.appbarHead}>
            <Appbar.BackAction onPress={() => {
              setTimeout(() => {
                this.props.navigation.goBack()
              }, 200);
            }} />
            <Appbar.Content title="" titleStyle={styles.appbarTitle} />
            <Appbar.Action
              icon="magnify"
              size={28}
              onPress={() => {

              }}
            />
          </Appbar>

          <View style={styles.separator} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.dividerPost} />
          <Article
            navigation={this.props.navigation}
            selfLoading={false}
            data={data}
            hasCommentBtn={false} />
          {data.comments.map(data => <CommentComponent key={data.id} data={data} />)}
        </ScrollView>
        <View style={styles.separator}></View>
        <View>
          <MyTextInput></MyTextInput>
        </View>
      </View>


    );
  }
}


const styles = StyleSheet.create({
  container: {
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
    borderBottomColor: '#000000',
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
    backgroundColor: '#e6e6fa',
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
    fontSize: 16,
    height: 45,
    margin: 10,
    backgroundColor: '#e6e6fa',
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
