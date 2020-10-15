import * as React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import { Appbar, Divider, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Feather from 'react-native-vector-icons'
import { StyleSheet, TouchableHighlight, View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Content } from 'native-base';

const LeftContent=props=><Avatar.Icon {...props} icon="settings"/>
const RightContent=props=>
    <View size={50} >
        <Text>đã cập nhật trạng thái của anh ấy </Text>
    </View>

const NoteTab = () => (

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
      <Appbar style={styles.appbarMiddle}>
        <Appbar.Action icon="home" size={29} onPress={() => {}}/>
        <Appbar.Action icon="youtube-tv" size={29} onPress={() => {}}/>
        <Appbar.Action icon="account-multiple" size={29} onPress={() => {}}/>
        <Appbar.Action icon="account-group" size={29} onPress={() => {}}/>
        <Appbar.Action icon="bell-outline" size={29} onPress={() => {}}/>
        <Appbar.Action icon="menu" size={29} onPress={() => {}}/>
      </Appbar>
      <Appbar style={styles.appbarBelow}>
        <Appbar.Content title="Thông báo"/>
        <Appbar.Action 
            icon="settings"
            color={Colors.black}
            size={25} 
            onPress={() => Alert.alert("OK")}/>
      </Appbar>
      <View style={styles.separator}/>
    </View>

    <ScrollView showsVerticalScrollIndicator={false}>
        
        <TouchableOpacity title="Văn A" subtitle="1m" 
            left={LeftContent} 
            right={RightContent}>
              </TouchableOpacity>   
      
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>
        <Card>
        <Card.Title title="Văn A" subtitle="1m" left={LeftContent} />   
        </Card>

    </ScrollView>


  </View>


 );

export default NoteTab

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
    height: 60,
    left: 0,
    right: 0,
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  appbarBelow:{
    elevation: 0,
    backgroundColor: '#ffffff',
    height: 15,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  appbarMiddle:{
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

  },
  title:{
      fontSize:5,
  }
});
