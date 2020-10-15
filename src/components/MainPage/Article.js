import React, { PureComponent } from 'react';
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Text, ScrollView } from 'react-native';


class Article extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.selfLoading) {
      let url = this.props.url;
    } else {
      this.state = {
        ...this.props.data
      }
    }
  }



  render() {
    return (
      <Card>
        <Card.Title title={this.state.userName} subtitle={this.state.timePosted / 60 + 'm'} left={(props) => <Avatar.Image size={50} source={require('../../../assets/favicon.png')} />} />
        <Card.Content>
          <Paragraph selectable>{this.state.content}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions style={styles.justifySpaceBetween}>
          <Text>
            <Button icon="thumb-up" color="#1877F2">{this.state.likes}</Button>
          </Text>
          <Text>{this.state.comments + ' Comments'} </Text>
        </Card.Actions>
        <View style={styles.postSeparator}></View>
        <Card.Actions style={styles.justifySpaceBetween}>
          <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
            <Button uppercase={false} icon="thumb-up-outline" color="#444444">Like</Button>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
            <Button uppercase={false} icon="comment-outline" color="#444444" >Comment</Button>
          </TouchableHighlight>
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
