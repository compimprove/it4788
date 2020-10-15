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

class SearchPage extends React.Component {
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
          <View style={styles.separator} />
        </View>

        <View style={styles.recentFind}>
          <Text style={{ fontWeight: 'bold' }}>Tìm kiếm gần đây</Text>
          <Text>CHỈNH SỬA</Text>
        </View>
        <View style={styles.separator} />



        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.searchsContent}>

          </View>
          <Button style={styles.searchKey} icon='magnify' uppercase={false} color='#000000'>
            sửa chữa nhà
          </Button>
          <Button style={styles.searchKey} icon='magnify' uppercase={false} color='#000000'>
            Mỹ Tâm
          </Button>
          <Button style={styles.searchKey} icon='magnify' uppercase={false} color='#000000'>
            soict
          </Button>
          <Button style={styles.searchKey} icon='magnify' uppercase={false} color='#000000'>
            k60 đại học Bách Khoa Hà Nội
          </Button>
          <Button style={styles.searchKey} icon='magnify' uppercase={false} color='#000000'>
            Hust
          </Button>
          <Button style={styles.searchKey} icon='magnify' uppercase={false} color='#000000'>
            sis
          </Button>
          <Button style={styles.searchKey} icon='magnify' uppercase={false} color='#000000'>
            Đội bóng Việt Nam
          </Button>
          <Button style={styles.searchKey} icon='magnify' uppercase={false} color='#000000'>
            Đội bóng Thái Lan
          </Button>
          <Button style={styles.searchKey} icon='magnify' uppercase={false} color='#000000'>
            sửa chữa nhà ở
          </Button>
          <Button style={styles.searchKey} icon='magnify' uppercase={false} color='#000000'>
            sửa chữa nhà kho
          </Button>
          <Button style={styles.searchKey} icon='magnify' uppercase={false} color='#000000'>
            sửa chữa đồng hồ
          </Button>
        </ScrollView>
      </View>


    );
    ;
  }
}

export default SearchPage;

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
  }
});
