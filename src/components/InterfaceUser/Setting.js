import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import {Appbar} from 'react-native-paper';
import { Container,List,ListItem,Item, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class Setting extends Component {
 _onPressButton1(){
   alert("Back");
 }
 _onPressButton2(){
  alert("Sao chép liên kết");
}
  render() {
    return (
      <Container>
        <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction icon="back" onPress={this._onPressButton1} />
      <Appbar.Content title="Cài đặt" />
      
    </Appbar.Header>
        
        <Content>
        <List>
            <ListItem itemDivider>
            </ListItem>                    
            <ListItem>
              <Text  onPress={() => {}}><Icon style={styles.icon} type="AntDesign" name='edit'/>  Chỉnh sửa trang cá nhân</Text>
            </ListItem>
            <ListItem>
              <Text  onPress={() => {}}><Icon style={styles.icon} type="MaterialIcons" name='rounded-corner'/>  Kho lưu trữ tin</Text>
            </ListItem>
            <ListItem>
              <Text  onPress={() => {}}><Icon style={styles.icon} type="MaterialCommunityIcons" name='bookmark-minus-outline'/>  Mục đã lưu</Text>
            </ListItem>
            <ListItem itemDivider>
            </ListItem>  
            <ListItem>
              <Text  onPress={() => {}}><Icon style={styles.icon} type="AntDesign" name='eyeo'/>  Chế độ xem</Text>
            </ListItem>
            <ListItem>
              <Text  onPress={() => {}}><Icon style={styles.icon} type="FontAwesome" name='list-ul'/>  Nhật ký hoạt động</Text>
            </ListItem>
            <ListItem>
              <Text  onPress={() => {}}><Icon style={styles.icon} type="FontAwesome" name='list-alt'/>  Quản lý bài viết</Text>
            </ListItem>
            <ListItem>
              <Text onPress={() => {}}><Icon style={styles.icon} type="Entypo" name='back-in-time'/>  Xem lại dòng thời gian</Text>
            </ListItem>
            <ListItem>
              <Text onPress={() => {}}><Icon style={styles.icon} type="Feather" name='lock'/>  Xem lối tắt riêng tư</Text>
            </ListItem>
            <ListItem>
              <Text onPress={() => {}}><Icon style={styles.icon} type="Ionicons" name='md-search'/>  Tìm kiếm trên trang cá nhân</Text>
            </ListItem>
            <ListItem itemDivider>
            </ListItem>
            <View style={styles.view}>
                    <Text  onPress={() => {}} style={styles.link}>Liên kết đến trang cá nhân</Text>
                    <Item style={{paddingBottom:10,paddingTop:10}}><Text>Liên kết của riêng bạn trên facebook</Text></Item>
                    <Text style={{paddingTop:10, fontWeight:'bold'}}>Link face</Text>

                    <Button onPress={this._onPressButton2} style={{marginTop:10,height:35,backgroundColor:'grey'}}><Text> Sao chép liên kết </Text></Button>
            </View>
          </List>


        </Content>
        <Footer>
          <FooterTab>
            
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
link: {
    fontSize:20,
    fontWeight:'bold'
},
view: {
    margin:10
},
});
