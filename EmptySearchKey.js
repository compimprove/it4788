import * as React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Appbar, Searchbar, Divider, Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Text, ScrollView, TextInput, Image } from 'react-native';

const MySearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

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

const MyComponent = () => (

  <View style={styles.container}>
    <View style={styles.appbar}>
      <Appbar style={styles.appbarHead}>
        <Appbar.BackAction onPress={() => { }} />
        <MySearchBar />
      </Appbar>
      <View style={styles.separator} />
    </View>

    <View style={styles.separator} />
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
      <Image
        style={{ height: 120, width: 120, marginBottom: 20 }}
        source={require('./assets/icon-view-5.jpg')}
      />
      <Text style={{ fontSize: 16, justifyContent: 'center', textAlign: 'center' }}>Hãy nhập vài từ để tìm kiếm trong facebook</Text>
    </ScrollView>
  </View>


);

export default MyComponent

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
    paddingLeft: 15,
    flex: 1,
    fontSize: 16,
    height: 45,
    margin: 10,
    backgroundColor: '#e6e6fa',
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  recentFind: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchKey: {
    alignSelf: 'flex-start',
  },
  searchbar: {
    flex: 1,
    marginRight: 15,
    borderRadius: 25,
    elevation: 0,
    backgroundColor: '#F0F2F5',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 50,
  }
});
