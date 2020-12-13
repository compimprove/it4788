import * as React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph, Searchbar } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Text, ScrollView } from 'react-native';
import Article from "./src/components/MainPage/Article";
const articleSample = require("./src/components/MainPage/article_sample.json");

const MySearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('Sửa chữa nhà');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      clearIcon='close'
      style={styles.searchbar}
    />
  );
};

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  navigate(route) {
    setTimeout(() => {
      this.props.navigation.navigate(route)
    },200);
  }

  goBack() {
    setTimeout(() => {
      this.props.navigation.goBack();
    },200);
  }
  render() {
    const _this = this;
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
        <View style={styles.appbar}>
          <Appbar style={styles.appbarHead}>
            <Appbar.BackAction onPress={() => { this.goBack() }} />
            <MySearchBar />
          </Appbar>
          <View>
            <Text style={styles.headerSearch}>Kết quả tìm kiếm</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#F0F2F5" }}>
          {articles}
        </ScrollView>


      </View>


    );

    ;
  }
}

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
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
    borderBottomColor: '#555555',
    borderBottomWidth: 0.5,
    elevation: 0,
  },
  postSeparator: {
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 0.5,
    elevation: 0,
  },
  dividerPost: {
    borderBottomColor: '#F0F2F5',
    borderBottomWidth: 10,
    elevation: 0,
  },
  appbar: {

  },
  searchbar: {
    flex: 1,
    marginRight: 15,
    borderRadius: 25,
    elevation: 0,
    backgroundColor: '#F0F2F5',
  },
  cardSearch: {
    margin: 15,
    elevation: 0,
  },
  headerSearch: {
    fontWeight: 'normal',
    marginLeft: 15,
    paddingBottom: 10,
    alignSelf: 'center',
    fontSize: 16,
    color: "#555555"
  },
});
