import * as React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Article from './src/components/MainPage/Article';
import { Tab, Tabs } from 'native-base';
import AppHeaderBar from './src/components/MainPage/AppHeaderBar';
const articleSample = require("./src/components/MainPage/article_sample.json");
const userSample = require("./src/components/MainPage/user_sample.json");

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  navigate(route) {
    setTimeout(() => {
      this.props.navigation.navigate(route)
    }, 300);
  }

  render() {
    let _this = this;
    let articles = [];
    for (let i = 0; i < articleSample.length; i++) {
      articles.push(
        <View key={articleSample[i].id}>
          <Article
            navigation={_this.props.navigation}
            selfLoading={false}
            data={articleSample[i]}
            hasCommentBtn={true} />
          <View style={styles.dividerPost}></View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <AppHeaderBar navigation={this.props.navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => {this.navigate("CreatePost")}}>
            <View>
              <Card.Title title={"Bạn đang nghĩ gì"}  left={(props) => <Avatar.Image size={50} source={{ uri: userSample.image_url }} />} />
            </View>
          </TouchableOpacity>
          <View style={styles.dividerPost}></View>
          {articles}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: "#ffffff",
  },

  appbarTitle: {
    fontSize: 30,
  },
  setBackgroundGray: {
    backgroundColor: '#E4E6EB'
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
  appbarBelow: {
    elevation: 0,
    backgroundColor: '#ffffff',
    height: 30,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    marginBottom: 15,
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
    borderBottomColor: '#d7d7d7',
    borderBottomWidth: 5,
    elevation: 0,
  },
  appbar: {

  }
});
