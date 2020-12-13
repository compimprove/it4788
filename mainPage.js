import * as React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import {Appbar, Divider, Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Article from './src/components/MainPage/Article';
import {Tab, Tabs} from 'native-base';
import AppHeaderBar from './src/components/MainPage/AppHeaderBar';
import axios from "axios";
import Utility from "./Utility";

const articleSample = require("./src/components/MainPage/article_sample.json");
const userSample = require("./src/components/MainPage/user_sample.json");
const config = require("./config.json");

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.getToken = this.props.route.params.getToken;
    console.log("token:" + this.getToken());
    this.state = {
      userName: "",
      articles: [],
      load: false,
    }
    this.addComment = this.addComment.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    this.updateAllPost();
    this.updateUser();
  }

  updateUser() {
    axios.get(config.host + "/it4895/user", {
      params: {
        token: this.getToken()
      }
    }).then(function (response) {
      console.log(response.data.data)
      let data = response.data.data;
      if (Utility.isSuccessResponse(response)) {
        this.setState({
          userName: data.username
        })
      } else {
        console.log(response.data);
      }
    }.bind(this))
  }

  updateAllPost() {
    this.setState({load: true});
    axios.get(config.host + "/it4895/get_list_posts", {
      params: {
        token: this.getToken(),
        last_id: 1
      }
    }).then(function (response) {
      console.log(response.data)
      if (Utility.isSuccessResponse(response)) {
        let articles = [];
        let posts = response.data.data.posts;
        for (let i = 0; i < posts.length; i++) {
          let e = posts[i];
          articles.push({
            id: e.id,
            content: e.described,
            likes: e.like,
            timePosted: e.updated_at,
            image_url: "https://picsum.photos/700"
          })
        }
        this.setState({
          articles: articles,
          load: false,
        })
        this.updateComment();
      }

    }.bind(this))
  }

  createPost(content, image) {
    axios.post(config.host + "/it4895/add_post", null, {
      params: {
        token: this.getToken(),
        described: content
      }
    }).then(function (response) {
      if (Utility.isSuccessResponse(response)) {
        this.updateAllPost();
      } else {
        console.log(response.data)
      }
    }.bind(this))
  }

  updateComment() {
    this.state.articles.forEach(function (post, id) {
      this.updatePostComment(post.id, id);
    }.bind(this));
  }

  updatePostComment(id, index) {
    axios.get(config.host + "/it4895/comment", {
      params: {
        token: this.getToken(),
        id: id
      }
    }).then(function (response) {
      if (Utility.isSuccessResponse(response)) {
        let comments = response.data.data.comment;
        let postComments = [];
        comments.forEach(e => {
          let postComment = {};
          postComment.userName = e.author.name;
          postComment.content = e.content;
          postComment.id = e.id;
          postComments.push(postComment);
        })
        this.state.articles[index].comments = postComments;
        this.state.articles[index].comment = postComments.length;
        this.setState({load: false});
      }
    }.bind(this))
  }

  addComment(postId, content) {
    axios.post(config.host + "/it4895/comment/add", null, {
      params: {
        token: this.getToken(),
        id: postId,
        described: content
      }
    }).then(function (response) {
      if (Utility.isSuccessResponse(response)) {
        let data = response.data.data;
        let post = this.state.articles.find(e => e.id === postId);
        if (post) {
          post.comments.push({
            userName: this.state.userName,
            content: data.content,
            id: Math.random() * 10000,
            timePosted: new Date()
          })
        }
        this.setState({load: false});
      }
      console.log("Add comment api", response.data)
    }.bind(this))
  }

  navigate(route, data) {
    setTimeout(() => {
      this.props.navigation.navigate(route, data)
    }, 300);
  }

  render() {
    let _this = this;
    let articles = [];
    for (let i = 0; i < this.state.articles.length; i++) {
      articles.push(
          <View key={this.state.articles[i].id}>
            <Article
                navigation={_this.props.navigation}
                selfLoading={false}
                addComment={this.addComment}
                userName={this.state.userName}
                data={this.state.articles[i]}
                hasCommentBtn={true}/>
            <View style={styles.dividerPost}/>
          </View>
      )
    }
    return (
        <View style={styles.container}>
          <AppHeaderBar navigation={this.props.navigation}/>
          <ScrollView
              showsVerticalScrollIndicator={false}
              onScroll={event => {
                if (event.nativeEvent.contentOffset.y === 0) {
                  this.updateAllPost();
                }
              }}>
            <TouchableOpacity onPress={() => {
              this.navigate("CreatePost", {
                createPost: this.createPost
              })
            }}>
              <View>
                <Card.Title title={"Bạn đang nghĩ gì"}
                            left={(props) => <Avatar.Image size={50} source={{uri: userSample.image_url}}/>}/>
              </View>
            </TouchableOpacity>
            <View style={styles.dividerPost}/>
            {this.state.load &&
            <View style={styles.dividerPost}><Text style={{fontSize: 20, paddingLeft: 30}}>Loading</Text></View>}
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
  loading: {
    height: 100
  },
  appbar: {}
});
