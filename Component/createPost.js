import React, { createContext } from 'react';
import { useState } from 'react';
import { Thumbnail, Header, Title, Button, Left, Right, Body, Icon, Container, Content } from 'native-base';
import { TextInput, StyleSheet, View, Text, Image, Modal, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            contentFontSize: 25
        }
    }
    setContent(content) {
        this.setState({ content });
    }

    render() {
        return (
            <>
                <Header>
                    <Left>
                        <Button onPress={() => { alert('Về trang chủ') }}>
                            <Ionicons name="md-arrow-back" size={24} color="white" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Tạo bài viết</Title>
                    </Body>
                    <Right>
                        <Button onPress={() => { alert('Đăng bài') }}>
                            <MaterialCommunityIcons name="post-outline" size={40} color="white" />
                        </Button>
                    </Right>
                </Header>
                <Container style={{ marginTop: 10, marginLeft: 15, marginRight: 15 }}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.useImage}
                            source={{ uri: 'https://picsum.photos/700' }}
                        />
                        <View style={styles.userInfo}>
                            <Text style={{ marginLeft: 5, fontWeight: "bold", fontSize: 24 }}>{this.props.userName}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialIcons name="public" size={20} color="black" />
                                <Text style={{ marginRight: 10, fontSize: 15, justifyContent: 'center' }}> Công khai</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.postInput}>
                        <TextInput
                            textAlignVertical="top"
                            style={{ height: 150, fontSize: this.state.contentFontSize }}
                            maxFontSizeMultiplier={10}
                            allowFontScaling={true}
                            multiline={true}
                            numberOfLines={10}
                            autoFocus={true}
                            placeholder="Bạn đang nghĩ gì?"
                            onChangeText={content => this.setContent(Content)}
                            defaultValue={this.state.content} />
                    </View>
                    <View style={styles.postOption}>
                        <TouchableOpacity style={styles.postOptionItem} onPress={()=>{alert('Đăng ảnh')}}>
                        <FontAwesome name="image" size={25} color="black" />
                        <Text style={{marginLeft:15,fontSize:20,justifyContent:'center'}}>Ảnh</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.postOptionItem} onPress={()=>{alert('Đăng video')}}>
                        <FontAwesome name="video-camera" size={25} color="black" />
                        <Text style={{marginLeft:10,fontSize:20,justifyContent:'center'}}>Video</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.postOptionItem} onPress={()=>{alert('Cảm xúc/ Hoạt động')}}>
                        <MaterialCommunityIcons name="sticker-emoji" size={30} color="black" />
                        <Text style={{marginLeft:10,fontSize:20,justifyContent:'center'}}>Cảm xúc/ Hoạt động</Text>
                        </TouchableOpacity>
                    </View>

                </Container>
            </>
        )


    }
}
const styles = StyleSheet.create({
    postHeader: {
        flexDirection: "row",
        minHeight: 60,
    },
    useImage: {
        width: 55,
        height: 55,
        borderRadius: 50
    },
    userInfo: {
        flexDirection: "column",
        flex: 8
    },
    userInfoBtns: {
        flexDirection: "row",
    },
    postInput: {
        height: 400,
        marginTop: 10
    },
    postOption: {

    },
    postOptionItem:{
        flexDirection:'row',
        borderTopWidth:1,
        height:45,
        alignItems:'center'
    }

})
