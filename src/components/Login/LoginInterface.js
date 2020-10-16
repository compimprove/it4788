
import React, {Component} from 'react';
import Footer from '../Footer/Footer';
import { Entypo } from '@expo/vector-icons';
import { Container,Icon,Item,Thumbnail, Content, Text } from 'native-base';


export default class LoginInterface extends Component {
    _onPressButton(){
        alert("Tạo tài khoản mới")
    }
    _onPressButton1(){
      alert("Đăng nhập bằng tài khoản khác")
  }
  _onPressButton2(){
    alert("Tìm tài khoản")
}
_onPressButton3(){
  alert("Gỡ tài khoản khỏi thiết bị")
} 
    render(){ 

    return (
      <Container>
        
        <Content style={{margin:10,
                         paddingTop:'40%',}}>
          
          <Entypo style={{
         textAlign:'center',
         color:'#1877F2',
        }} name="facebook-with-circle" size={50} color="black" />
        <Item style={{paddingTop:30,paddingBottom:30}}>
        <Thumbnail onPress={()=>{}} style={{width:100, height:100}} source={require('../Login/image/dog.jpg')} />  
        <Text style={{marginLeft:10,fontWeight:'bold'}}>Cỏ đắng</Text>
       <Icon type="Entypo" style={{marginLeft:'40%'}} name='dots-three-vertical'/>
       
      
        </Item>
        <Item onPress={this._onPressButton1} style={{paddingBottom:10,paddingTop:10}} >
          <Icon style={{color:'#1877F2'}} type="Ionicons" name="md-add-circle-outline"/>
          <Text style={{color:'#1877F2',fontWeight:'bold'}} > Đăng nhập bằng tài khoản khác</Text>
        </Item>
        <Item onPress={this._onPressButton2} style={{paddingBottom:10,paddingTop:10}}>
          <Icon style={{color:'#1877F2',fontWeight:'bold'}} type="AntDesign" name="search1"/>
          <Text style={{color:'#1877F2',fontWeight:'bold'}} >Tìm tài khoản</Text>
        </Item>
        
            </Content>
        <Footer />
      </Container>
    );
  }
}

