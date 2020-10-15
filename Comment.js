import React, { useState } from "react";
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Text, ScrollView, TextInput } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';


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

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appbar}>

          <Card.Actions style={styles.justifySpaceBetween}>
            <Text>
              <Button icon="thumb-up">2</Button>
            </Text>
          </Card.Actions>
          <View style={styles.separator} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SkeletonContent
            containerStyle={{ flex: 1, width: 300 }}
            isLoading={this.state.isLoading}
            layout={[
              {
                flexDirection: "row", marginTop: 20, children: [
                  { width: 50, height: 50, borderRadius: 50 },
                  { width: 250, height: 50, borderRadius: 20, marginLeft: 20 },
                ]
              },
              {
                flexDirection: "row", marginTop: 20, children: [
                  { width: 50, height: 50, borderRadius: 50 },
                  { width: 150, height: 100, borderRadius: 20, marginLeft: 20 },
                ]
              },
              {
                flexDirection: "row", marginTop: 20, children: [
                  { width: 50, height: 50, borderRadius: 50 },
                  { width: 170, height: 70, borderRadius: 20, marginLeft: 20 },
                ]
              },
              {
                flexDirection: "row", marginTop: 20, children: [
                  { width: 50, height: 50, borderRadius: 50 },
                  { width: 170, height: 70, borderRadius: 20, marginLeft: 20 },
                ]
              },
              {
                flexDirection: "row", marginTop: 20, children: [
                  { width: 50, height: 50, borderRadius: 50 },
                  { width: 150, height: 70, borderRadius: 20, marginLeft: 20 },
                ]
              },
              {
                flexDirection: "row", marginTop: 20, children: [
                  { width: 50, height: 50, borderRadius: 50 },
                  { width: 150, height: 70, borderRadius: 20, marginLeft: 20 },
                ]
              }
            ]}
          >
            <View>
              <Button style={{ marginTop: 10, alignSelf: 'flex-start' }} mode="text" color="#000000" uppercase={false} onPress={() => console.log('Pressed')}>
                Xem các bình luận trước...
              </Button>

              <View style={styles.comment}>
                <Avatar.Image size={50} source={require('./assets/favicon.png')} style={styles.avatarComment} />
                <View style={styles.commentBody}>
                  <View style={styles.commentBackground}>
                    <Text style={styles.userName}>Van B</Text>
                    <Text style={styles.commentContent}>Lorem ipsum dolor sit amet, in quo dolorum ponderumLorem ipsum dolor sit amet, in quo dolorum ponderumLorem ipsum dolor sit amet, in quo dolorum ponderum</Text>
                  </View>
                  <Text style={styles.timeComment}>1 day</Text>
                </View>
              </View>

              <View style={styles.comment}>
                <Avatar.Image size={50} source={require('./assets/favicon.png')} style={styles.avatarComment} />
                <View style={styles.commentBody}>
                  <View style={styles.commentBackground}>
                    <Text style={styles.userName}>Van C</Text>
                    <Text style={styles.commentContent}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <Text style={styles.timeComment}>1 day</Text>
                </View>
              </View>

              <View style={styles.comment}>
                <Avatar.Image size={50} source={require('./assets/favicon.png')} style={styles.avatarComment} />
                <View style={styles.commentBody}>
                  <View style={styles.commentBackground}>
                    <Text style={styles.userName}>Van C</Text>
                    <Text style={styles.commentContent}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <Text style={styles.timeComment}>1 day</Text>
                </View>
              </View>

              <View style={styles.comment}>
                <Avatar.Image size={50} source={require('./assets/favicon.png')} style={styles.avatarComment} />
                <View style={styles.commentBody}>
                  <View style={styles.commentBackground}>
                    <Text style={styles.userName}>Van C</Text>
                    <Text style={styles.commentContent}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <Text style={styles.timeComment}>1 day</Text>
                </View>
              </View>

              <View style={styles.comment}>
                <Avatar.Image size={50} source={require('./assets/favicon.png')} style={styles.avatarComment} />
                <View style={styles.commentBody}>
                  <View style={styles.commentBackground}>
                    <Text style={styles.userName}>Van C</Text>
                    <Text style={styles.commentContent}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <Text style={styles.timeComment}>1 day</Text>
                </View>
              </View>

              <View style={styles.comment}>
                <Avatar.Image size={50} source={require('./assets/favicon.png')} style={styles.avatarComment} />
                <View style={styles.commentBody}>
                  <View style={styles.commentBackground}>
                    <Text style={styles.userName}>Van C</Text>
                    <Text style={styles.commentContent}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <Text style={styles.timeComment}>1 day</Text>
                </View>
              </View>

              <View style={styles.comment}>
                <Avatar.Image size={50} source={require('./assets/favicon.png')} style={styles.avatarComment} />
                <View style={styles.commentBody}>
                  <View style={styles.commentBackground}>
                    <Text style={styles.userName}>Van C</Text>
                    <Text style={styles.commentContent}>Lorem ipsum dolor sit amet</Text>
                  </View>
                  <Text style={styles.timeComment}>1 day</Text>
                </View>
              </View>
            </View>
          </SkeletonContent>



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
