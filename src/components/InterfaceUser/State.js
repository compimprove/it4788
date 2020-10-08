import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import { Container, Header,Form,Item,Input, Label,List,ListItem, Thumbnail, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Setting extends Component {
    render(){
        return(
            <ListItem avatar>
              <Left>
              <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={() => {}} />
              </Left>
              <Body>
                <Text>{this.state.name}</Text>
                <Text note> Số bạn chung {this.state.friends}</Text>
                <Text></Text>
              </Body>
              <Right>
                <Text>...</Text>
              </Right>
            </ListItem>
        )
      }
    }
    const styles = StyleSheet.create({
        
       });