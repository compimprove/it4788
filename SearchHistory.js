import * as React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Appbar, Searchbar, Divider, Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Text, ScrollView, TextInput } from 'react-native';

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

const MyTextInput = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      style={styles.myTextInput}
      placeholder="Tìm kiếm"
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.appbar}>
          <Appbar style={styles.appbarHead}>
            <Appbar.BackAction onPress={() => { this.props.navigation.goBack() }} />
            <Appbar.Content title='Nhật ký hoạt động' />
          </Appbar>
          <View style={styles.separator} />
        </View>

        <View style={styles.recentFind}>
          <Button style={styles.searchKey} uppercase={false} color='#216fdb'>
            Xóa các tìm kiếm
        </Button>
        </View>
        <View style={styles.separator} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.searchsContent}>
            <Text style={styles.time}>7 tháng 8 2020</Text>
            <View style={styles.comment}>
              <Avatar.Icon size={50} icon='magnify' style={styles.avatarComment} />
              <View style={styles.commentBody}>
                <View>
                  <Text style={styles.userName}>Bạn đã tìm kiếm trên facebook</Text>
                  <Text style={styles.commentContent}>"sửa chữa nhà"</Text>
                </View>
              </View>
              <Button icon='close' color='#a9a9a9' labelStyle={{ fontSize: 25 }}></Button>
            </View>

            <View style={styles.comment}>
              <Avatar.Icon size={50} icon='magnify' style={styles.avatarComment} />
              <View style={styles.commentBody}>
                <View>
                  <Text style={styles.userName}>Bạn đã tìm kiếm trên facebook</Text>
                  <Text style={styles.commentContent}>"sửa chữa nhà"</Text>
                </View>
              </View>
              <Button icon='close' color='#a9a9a9' labelStyle={{ fontSize: 25 }}></Button>
            </View>

            <View style={styles.comment}>
              <Avatar.Icon size={50} icon='magnify' style={styles.avatarComment} />
              <View style={styles.commentBody}>
                <View>
                  <Text style={styles.userName}>Bạn đã tìm kiếm trên facebook</Text>
                  <Text style={styles.commentContent}>"sửa chữa nhà"</Text>
                </View>
              </View>
              <Button icon='close' color='#a9a9a9' labelStyle={{ fontSize: 25 }}></Button>
            </View>

            <Text style={styles.time}>6 tháng 8 2020</Text>
            <View style={styles.comment}>
              <Avatar.Icon size={50} icon='magnify' style={styles.avatarComment} />
              <View style={styles.commentBody}>
                <View>
                  <Text style={styles.userName}>Bạn đã tìm kiếm trên facebook</Text>
                  <Text style={styles.commentContent}>"sửa chữa nhà"</Text>
                </View>
              </View>
              <Button icon='close' color='#a9a9a9' labelStyle={{ fontSize: 25 }}></Button>
            </View>

            <View style={styles.comment}>
              <Avatar.Icon size={50} icon='magnify' style={styles.avatarComment} />
              <View style={styles.commentBody}>
                <View>
                  <Text style={styles.userName}>Bạn đã tìm kiếm trên facebook</Text>
                  <Text style={styles.commentContent}>"sửa chữa nhà"</Text>
                </View>
              </View>
              <Button icon='close' color='#a9a9a9' labelStyle={{ fontSize: 25 }}></Button>
            </View>
          </View>
        </ScrollView>
      </View>


    );
    ;
  }
}

export default SearchHistory;


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
    justifyContent: 'center',
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
    backgroundColor: '#1877F2'
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
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center'
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
  time: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
  }
});
