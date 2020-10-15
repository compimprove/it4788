import * as React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph, Searchbar } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Text, ScrollView } from 'react-native';

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
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.appbar}>
          <Appbar style={styles.appbarHead}>
            <Appbar.BackAction onPress={() => { }} />
            <MySearchBar />
          </Appbar>
          <View>
            <Text style={styles.headerSearch}>Kết quả tìm kiếm</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#F0F2F5" }}>

          <Card style={styles.cardSearch}>
            <Card.Title title="Văn A" subtitle="1m" left={(props) => <Avatar.Image size={50} source={require('./assets/favicon.png')} />} />
            <Card.Content>
              <Paragraph selectable>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions style={styles.justifySpaceBetween}>
              <Text>
                <Button icon="thumb-up" color="#1877F2">2</Button>
              </Text>
              <Text>23 Comments</Text>
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

          <Card style={styles.cardSearch}>
            <Card.Title title="Văn A" subtitle="1m" left={(props) => <Avatar.Image size={50} source={require('./assets/favicon.png')} />} />
            <Card.Content>
              <ViewMoreText numberOfLines={10}>
                <Paragraph selectable>
                  Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                  Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                  Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                  Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                  </Paragraph>
              </ViewMoreText>

            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions style={styles.justifySpaceBetween}>
              <Text>
                <Button icon="thumb-up" color="#1877F2">2</Button>
              </Text>
              <Text>23 Comments</Text>
            </Card.Actions>
            <View style={styles.postSeparator}></View>
            <Card.Actions style={styles.justifySpaceBetween}>
              <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
                <Button uppercase={false} icon="thumb-up-outline" color="#444444" >Like</Button>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
                <Button uppercase={false} icon="comment-outline" color="#444444" >Comment</Button>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
                <Button uppercase={false} icon="share-outline" color="#444444" >Share</Button>
              </TouchableHighlight>

            </Card.Actions>
          </Card>
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
