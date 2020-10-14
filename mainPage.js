import * as React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Text, ScrollView } from 'react-native';

const MainPage = () => (

  <View style={styles.container}>
    <View style={styles.appbar}>
      <Appbar style={styles.appbarHead}>
        <Appbar.Content title="facebook" titleStyle={styles.appbarTitle} color={'#007AFF'}/>
        <Appbar.Action
           icon="magnify"
           size={28}
           style={styles.setBackgroundGray}
           onPress={() => {}}
         />
        <Appbar.Action icon="facebook-messenger" size={28} style={styles.setBackgroundGray} onPress={() => {}} />
      </Appbar>

      <Appbar style={styles.appbarBelow}>
        <Appbar.Action icon="home" size={29} onPress={() => {}}/>
        <Appbar.Action icon="youtube-tv" size={29} onPress={() => {}}/>
        <Appbar.Action icon="account-multiple" size={29} onPress={() => {}}/>
        <Appbar.Action icon="account-group" size={29} onPress={() => {}}/>
        <Appbar.Action icon="bell-outline" size={29} onPress={() => {}}/>
        <Appbar.Action icon="menu" size={29} onPress={() => {}}/>
      </Appbar>
      <View style={styles.separator}/>
    </View>

    <ScrollView showsVerticalScrollIndicator={false}>

      <Card>
          <Card.Title title="Văn A" subtitle="1m" left={(props) => <Avatar.Image size={50} source={require('./assets/favicon.png')} /> } />
          <Card.Content>
              <Paragraph selectable>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions style={styles.justifySpaceBetween}>
              <Text>
                <Button icon="camera">2</Button>
              </Text>
              <Text>23 Comments</Text>
          </Card.Actions>
          <View style={styles.postSeparator}></View>
          <Card.Actions style={styles.justifySpaceBetween}>
            <TouchableHighlight underlayColor="#dddddd" onPress={() => {}}>
              <Button uppercase={false} icon="thumb-up-outline" >Like</Button>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#dddddd" onPress={() => {}}>
              <Button uppercase={false} icon="comment-outline" >Comment</Button>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#dddddd" onPress={() => {}}>
              <Button uppercase={false} icon="share-outline" >Share</Button>
            </TouchableHighlight>

          </Card.Actions>
        </Card>

      <View style={styles.dividerPost}></View>

      <Card>
          <Card.Title title="Văn A" subtitle="1m" left={(props) => <Avatar.Image size={50} source={require('./assets/favicon.png')} /> } />
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
                <Button icon="camera">2</Button>
              </Text>
              <Text>23 Comments</Text>
          </Card.Actions>
          <View style={styles.postSeparator}></View>
          <Card.Actions style={styles.justifySpaceBetween}>
            <TouchableHighlight underlayColor="#dddddd" onPress={() => {}}>
              <Button uppercase={false} icon="thumb-up-outline" >Like</Button>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#dddddd" onPress={() => {}}>
              <Button uppercase={false} icon="comment-outline" >Comment</Button>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#dddddd" onPress={() => {}}>
              <Button uppercase={false} icon="share-outline" >Share</Button>
            </TouchableHighlight>

          </Card.Actions>
        </Card>
    </ScrollView>


  </View>


 );

export default MainPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  appbarTitle:{
    fontSize: 30,
  },
  setBackgroundGray:{
    backgroundColor: '#ddddff'
  },
  appbarHead:{
    elevation: 0,
    backgroundColor: '#ffffff',
    height: 70,
    left: 0,
    right: 0,
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  appbarBelow:{
    elevation: 0,
    backgroundColor: '#ffffff',
    height: 30,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  separator:{
    borderBottomColor: '#000000',
    borderBottomWidth: 0.5,
    elevation: 0,
  },
  postSeparator:{
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 0.5,
    elevation: 0,
  },
  dividerPost:{
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 10,
    elevation: 0,
  },
  appbar:{

  }
});