import * as React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Text, ScrollView, TextInput } from 'react-native';

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
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.appbar}>
          <Appbar style={styles.appbarHead}>
            <Appbar.BackAction onPress={() => { }} />
            <Appbar.Content title="Văn A" titleStyle={styles.appbarTitle} />
            <Appbar.Action
              icon="magnify"
              size={28}
              onPress={() => { }}
            />
          </Appbar>

          <View style={styles.separator} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.dividerPost} />
          <Card>
            <Card.Title title="Văn A" subtitle="1m" left={(props) => <Avatar.Image size={50} source={require('./assets/favicon.png')} />} />
            <Card.Content>
              <Paragraph selectable>
                Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                </Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions style={styles.justifySpaceBetween}>
              <Text>
                <Button icon="thumb-up">2</Button>
              </Text>
              <Text>23 Comments</Text>
            </Card.Actions>
            <View style={styles.postSeparator}></View>
            <Card.Actions style={styles.justifySpaceBetween}>
              <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
                <Button uppercase={false} icon="thumb-up-outline" >Like</Button>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
                <Button uppercase={false} icon="comment-outline" >Comment</Button>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
                <Button uppercase={false} icon="share-outline" >Share</Button>
              </TouchableHighlight>
            </Card.Actions>
          </Card>
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
