import * as React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Text, ScrollView, TextInput, Image } from 'react-native';

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

const MyComponent = () => (

  <View style={styles.container}>
    <View style={styles.appbar}>
      <Card.Actions style={styles.justifySpaceBetween}>
          <Text>
            <Button icon="thumb-up" color='#1877F2'>2</Button>
          </Text>
      </Card.Actions>
      <View style={styles.separator}/>
    </View>

    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        <Image
          style={{height: 150, width: 150}}
          source={require('./assets/comment-election.png')}
        />
        <Text>Viết bình luận trong khi offline</Text>
        <Button icon="reload" mode="text" color="#808080" uppercase={false} onPress={() => console.log('Pressed')}>
          Nhấn để thử tải lại bình luận
        </Button>
    </ScrollView>
    <View style={styles.separator}></View>
    <View>
      <MyTextInput></MyTextInput>
    </View>
  </View>
 );

export default MyComponent

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: "#ffffff",
  },

  justifySpaceBetween: {
    justifyContent: 'space-between',
  },

  separator:{
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.5,
    elevation: 0,
  },

  comment: {
    marginTop: 20,
    flexDirection: 'row',
    flexShrink: 1
  },

  myTextInput: {
    paddingLeft: 15,
    fontSize:16,
    height: 45,
    margin: 10,
    backgroundColor: '#F0F2F5',
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems:'center',
    justifyContent: 'center',
  }
});
